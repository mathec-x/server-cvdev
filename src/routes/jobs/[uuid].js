import db from '../../../prisma';
import { candidate } from '../../../prisma/selectors';
import { getFavicon } from '../candidates/_helpers';

/**
 * @type { import("express-next-api").NextApi<{uuid: string}, import('@prisma/client').Job> }
 */
export const put = async (req, res) => {
    try {

        let { begin, finish, company, description, occupation, site } = req.body;
        let image = null;

        if(site){
            image = await getFavicon(site) || null
        }

        begin = new Date(begin.split('-'));

        /**
         * Prisma Client differentiates between null and undefined:
         * - null is a value
         * - undefined means do nothing
         */
        if (typeof finish !== undefined && String(finish) === '') {
            finish = null;
        } else {
            finish = new Date(finish.split('-'));
        }

        // console.log({ begin, finish, company, description, occupation, image, site });
        const data = await db.candidate.update({
            where: { nick: req.subscription },
            select: candidate.select,
            data: {
                jobs: {
                    update: {
                        where: { uuid: req.params.uuid },
                        data: { begin, finish, company, description, occupation, image, site }
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
            data: { jobs: { delete: { uuid: req.params.uuid } } }
        });
        return res.to(req.subscription).dispatch('candidate:mount', data);

    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
}