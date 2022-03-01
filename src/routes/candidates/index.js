const db = require("../../../prisma");
const md = require("../../../prisma/selectors");

/**
 * @type { import("express-next-api").NextApi<{}, { email: string, image: string, name:string, nick:string }> } 
 */
 exports.post = async (req, res) => {
    try {
        const data = await db.candidate.create({
            select: md.candidates.select,
            data: {
                ...req.body,
                user: {connect: { uuid: req.user.uuid }}
            },
        });

        res.$emit('dispatch', { type: 'candidates:create', payload: data });
        return res.sendStatus(201);

    } catch (error) {
        console.log(error)
        res.sendStatus(400);
    }
}
