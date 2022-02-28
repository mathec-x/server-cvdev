const db = require("../../../prisma");
const { candidates } = require("../../../prisma/selectors");

/**
 * @type { import("express-next-api").NextApi<{uuid: string}, import('@prisma/client').Prisma.CandidateUpdateArgs['data'] > } 
 */
 exports.put = async (req, res) => {
    try {
        const set = {};
            set.image = req.body.image || undefined;
            set.name = req.body.name || undefined;
            set.nick = req.body.nick || undefined;
            set.email = req.body.email || undefined;

        const data = await db.candidate.update({
            select: candidates.select,
            where: { uuid: req.params.uuid },
            data: set
        });

        res.to(data.nick).$emit('dispatch', { type: 'candidate:update', payload: data });
        res.$emit('dispatch', { type: 'candidates:update', payload: data });
        return res.sendStatus(200);

    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
}

/**
 * @type { import("express-next-api").NextApi<{}, { email: string, image: string, name:string, nick:string }> } 
 */
exports.post = async (req, res) => {
    try {
        const data = await db.candidate.create({
            select: candidates.select,
            data: {
                ...req.body,
                user: {
                    connect: {
                        uuid: req.user.uuid
                    }
                }
            },
        });

        res.$emit('dispatch', { type: 'candidates:create', payload: data });
        return res.sendStatus(201);

    } catch (error) {
        console.log(error)
        res.sendStatus(400);
    }
}