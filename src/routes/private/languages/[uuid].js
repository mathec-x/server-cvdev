import db from '../../../../prisma';
import { candidate } from '../../../../prisma/selectors';

/**
 * @type { import("express-next-api").NextApi<{uuid: string}, import('@prisma/client').Language> }
 */
export const put = async (req, res) => {
    try {

        let { title, level } = req.body;

        const data = await db.candidate.update({
            where: { nick: req.subscription },
            select: candidate.select,
            data: {
                languages: {
                    update: {
                        where: { uuid: req.params.uuid },
                        data: { title, level }
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


/**
 * @type { import("express-next-api").NextApi<{uuid: string}> }
 */
export const del = async (req, res) => {
    try {
        const data = await db.candidate.update({
            where: { nick: req.subscription },
            select: candidate.select,
            data: { languages: { delete: { uuid: req.params.uuid } } }
        });
        return res.to(req.subscription).dispatch('candidate:mount', data);

    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
}