import db from "../../../../prisma";
import { candidates } from "../../../../prisma/selectors";
import { CandidateErrors, validateBody } from "./_helpers";

/**
 * @type { import("express-next-api").NextApi<{}, { email: string, image: string, name:string, nick:string }> } 
 */
 export async function  post(req, res) {
    try {
        const {email, image, name, nick} = await validateBody(req.body);
        const data = await db.candidate.create({
            select: candidates.select,
            data: {
                email: String(email) || undefined, 
                image: String(image) || undefined, 
                name: String(name) || undefined, 
                nick: String(nick) || undefined,
                user: {connect: { uuid: req.user.uuid }}
            },
        });

        res.$emit('dispatch', { type: 'candidates:create', payload: data });
        return res.sendStatus(201);

    } catch (error) {
        console.log(error);
        res.status(400).send(CandidateErrors(error));
    }
}
