const db = require('../../../prisma');
const md = require('../../../prisma/selectors');
const { asDate } = require('../../prototypes');
/**
 * @type { import("express-next-api").NextApi<{uuid: string}, import('@prisma/client').Job> }
 */
exports.put = async (req, res) => {
    try {

        let { begin, finish, company, description, occupation  } = req.body;

        begin = asDate(begin);
        finish = asDate(finish);

        const data = await db.candidate.update({
            where: { nick: req.subscription },
            select: md.candidate.select,
            data: {
                jobs: { 
                    update: { 
                        where: { uuid: req.params.uuid },
                        data: { begin, finish, company, description, occupation}
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
exports.delete = async (req, res) => {
    try {
        const data = await db.candidate.update({
            where: { nick: req.subscription },
            select: md.candidate.select,
            data: { jobs: { delete: { uuid: req.params.uuid } } }
        });
        return res.to(req.subscription).dispatch('candidate:mount', data);

    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
}