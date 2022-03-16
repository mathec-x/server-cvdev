import db from "../../../prisma";
import { candidates } from "../../../prisma/selectors";

/**
 * @type { import("express-next-api").NextApi<{}, { email: string, image: string, name:string, nick:string }> } 
 */
 export async function  post(req, res) {
    try {
        const data = await db.candidate.create({
            select: candidates.select,
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
