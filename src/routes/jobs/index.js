const db = require('../../../prisma');
const md = require('../../../prisma/selectors');
const { asDate } = require('../../prototypes');

/**
 * @type { import("express-next-api").NextApi<_, import('@prisma/client').Job> }
 */
exports.post = async (req, res) => {
    try {
        let { begin, finish, company, description, occupation  } = req.body;

        begin = asDate(begin);
        finish = asDate(finish);
        
        const data =  await db.candidate.update({
            where: { nick: req.subscription },
            select: md.candidates.select,
            data: { jobs: { create: { 
                begin,
                finish,
                company, 
                description, 
                occupation 
            }}}
        });

        return res.dispatch('candidate:mount', data);

    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
}