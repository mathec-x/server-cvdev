import db from '../../../../prisma';
import { candidate } from '../../../../prisma/selectors';

/**
 * @type { import("express-next-api").NextApi<{}, import('@prisma/client').Education> }
 */
export async function post(req, res) {
    try {
        let { begin, finish, institution, course } = req.body;

        // @ts-ignore
        begin = new Date(begin.split('-'));

        if (finish) {
            // @ts-ignore
            finish = new Date(finish.split('-'));
        } else {
            finish = undefined;
        }

        const data = await db.candidate.update({
            where: { nick: req.subscription },
            select: candidate.select,
            data: {
                educations: {
                    create: {
                        begin,
                        finish,
                        institution,
                        course
                    }
                }
            }
        });

        return res.to(req.subscription).dispatch('candidate:mount', data);

    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
}