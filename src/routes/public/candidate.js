import db from "../../../prisma";

/**
 * @type { import("express-next-api").NextApi<{}, {}, import("@prisma/client").Prisma.CandidateWhereInput > } 
 */
export async function get(req, res) {
    try {
        const match = await db.candidate.findFirst({ where: req.query });
        if (match) {
            return res.sendStatus(200);
        };
    } catch (error) {
        console.log(error)
    }
    res.sendStatus(404);
}