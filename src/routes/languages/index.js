import db from '../../../prisma';
import { candidate } from '../../../prisma/selectors';

/**
 * @type { import("express-next-api").NextApi<{}, import('@prisma/client').Language> }
 */
export async function post(req, res) {
    try {
        let { title, level } = req.body;
        const data =  await db.candidate.update({
            where: { nick: req.subscription },
            select: candidate.select,
            data: { languanges: { create: { title, level }}}
        });

        return res.to(req.subscription).dispatch('candidate:mount', data);

    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
}