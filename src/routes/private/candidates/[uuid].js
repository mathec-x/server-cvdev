import db from "../../../../prisma";
import * as md from "../../../../prisma/selectors";
import { validateBody } from "./_helpers";

/**
 * @type { import("express-next-api").NextApi<{uuid: string}, import('@prisma/client').Prisma.CandidateUpdateArgs['data'] > } 
 */
export async function put(req, res) {
    res.$emit('loading', true)
    try {
        const data = await db.candidate.update({
            select: md.candidate.select,
            where: { nick: req.subscription },
            data: await validateBody(req.body)
        });

        res.to(data.nick).$emit('dispatch', { type: 'candidate:mount', payload: data });
        res.to(req.user.uuid).$emit('dispatch', { type: 'candidates:update', payload: data });
        res.sendStatus(200);

    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }

    res.$emit('loading', false)
}

/**
 * @type { import("express-next-api").NextApi<{uuid: string}> } 
 */
export async function del(req, res) {
    res.$emit('loading', true)
    try {

        const data = await db.candidate.delete({ where: { nick: req.subscription } });
        res.to(req.user.uuid).$emit('dispatch', { type: 'candidates:delete', payload: data });
        // res.to(req.user.uuid).$emit('dispatch', { type: 'candidates:update', payload: data });
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
    res.$emit('loading', false)
}