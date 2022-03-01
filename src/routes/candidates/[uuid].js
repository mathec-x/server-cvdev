const db = require("../../../prisma");
const { candidates } = require("../../../prisma/selectors");
const { validateBody } = require("./_helpers");

/**
 * @type { import("express-next-api").NextApi<{uuid: string}, import('@prisma/client').Prisma.CandidateUpdateArgs['data'] > } 
 */
 exports.put = async (req, res) => {
    try {
        const data = await db.candidate.update({
            select: candidates.select,
            where: { uuid: req.params.uuid },
            data: validateBody(req.body)
        });

        res.to(data.nick).$emit('dispatch', { type: 'candidate:mount', payload: data });
        res.to(req.user.uuid).$emit('dispatch', { type: 'candidates:update', payload: data });
        return res.sendStatus(200);

    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
}

/**
 * @type { import("express-next-api").NextApi<{uuid: string}> } 
 */
 exports.del = async (req, res) => {
    try {
        const data = await db.candidate.delete({ where: { uuid: req.params.uuid } });
        res.to(data.nick).$emit('dispatch', { type: 'candidate:delete', payload: data });
        res.to(req.user.uuid).$emit('dispatch', { type: 'candidates:update', payload: data });
        return res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
}