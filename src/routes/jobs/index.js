import db from '../../../prisma';
import { candidate } from '../../../prisma/selectors';

/**
 * @type { import("express-next-api").NextApi<{}, import('@prisma/client').Job> }
 */
export async function post(req, res) {
    try {
        let { begin, finish, company, description, occupation  } = req.body;

        begin = begin.toDate();
        finish = finish.toDate();
        
        const data =  await db.candidate.update({
            where: { nick: req.subscription },
            select: candidate.select,
            data: { jobs: { create: { 
                begin,
                finish,
                company, 
                description, 
                occupation 
            }}}
        });

        return res.to(req.subscription).dispatch('candidate:mount', data);

    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
}