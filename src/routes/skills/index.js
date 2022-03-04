const db = require('../../../prisma');
const md = require('../../../prisma/selectors');

/**
 * @type { import("express-next-api").NextApi<{tag?: string}, {}, {q: string}> } 
 */
exports.get = async (req, res) => {
    try {
        // @ts-ignore
        const data = await db.skill.findMany({
            where: { tag: { contains: req.query.q.replace(/[^\w#&*]/g, '').toLocaleLowerCase() } },
            select: { uuid: true, tag: true, title: true },
            take: 20
        });

        res.json(data);

    } catch (error) {
        console.log(error)
        res.sendStatus(400);
    }
}

/**
 * @type { import("express-next-api").NextApi<_, { title: string, company: string }> } 
 */
exports.post = async (req, res) => {
    try {
        const title = req.body.title.Capitalize();
        const tag = req.body.title.replace(/[^\w#&*]/g, '').toLocaleLowerCase();

        await db.job.update({
            where: { uuid: req.body.company },
            data: {
                skills: { connectOrCreate: { where: { tag }, create: { title, tag } } }
            }
        });

        const candidate = await db.candidate.findUnique({where: { nick: req.subscription }, ...md.candidate })
        return res.to(req.subscription).dispatch('candidate:mount', candidate);

    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
}

/**
 * @type { import("express-next-api").NextApi<_, { tag: string, company: string }> } 
 */
exports.delete = async (req, res) => {
    try {
        await db.job.update({
            where: { uuid: req.body.company },
            data: {
                skills: {
                    disconnect: {
                        tag: req.body.tag
                    }
                }
            }
        });
        
        const candidate = await db.candidate.findUnique({where: { nick: req.subscription }, ...md.candidate })
        return res.to(req.subscription).dispatch('candidate:mount', candidate);

    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
}