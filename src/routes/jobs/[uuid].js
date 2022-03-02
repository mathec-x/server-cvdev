const db = require('../../../prisma');
const md = require('../../../prisma/selectors');
/**
 * @type { import("express-next-api").NextApi<{uuid: string}, import('@prisma/client').Job> }
 */
exports.put = async (req, res) => {
    try {
        const data = await db.candidate.update({
            where: { nick: req.subscription },
            select: md.candidates.select,
            data: {
                jobs: { 
                    update: { 
                        where: { uuid: req.params.uuid },
                        data: req.body
                    } 
                }
            }
        });
        return res.dispatch('candidate:mount', data);

    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
}


/**
 * @type { import("express-next-api").NextApi<{uuid: string}> }
 */
exports.delete = async (req, res) => {
    try {
        const data = await db.candidate.update({
            where: { nick: req.subscription },
            select: md.candidates.select,
            data: { jobs: { delete: { uuid: req.params.uuid } } }
        });
        return res.dispatch('candidate:mount', data);

    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
}