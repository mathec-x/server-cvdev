import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import db from "../../../../prisma";
import * as md from "../../../../prisma/selectors";
import { CandidateErrors, validateBody } from "./_helpers";

/**
 * @type { import("express-next-api").NextApi<{uuid: string}, import('@prisma/client').Prisma.CandidateUpdateArgs['data'] > } 
 */
export async function put(req, res) {
    res.$emit('loading', true)
    try {
        const body = await validateBody(req.body);
        const data = await db.candidate.update({
            select: md.candidate.select,
            where: { nick: req.subscription },
            data: body
        });

        res.to(data.nick).$emit('dispatch', { type: 'candidate:mount', payload: data });
        res.to(req.user.uuid).$emit('dispatch', { type: 'candidates:update', payload: data });
        res.sendStatus(200);

    } catch (error) {
        res.status(400).send(CandidateErrors(error));
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