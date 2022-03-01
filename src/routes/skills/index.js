const db = require('../../../prisma');
const md = require('../../../prisma/selectors');

/**
 * @type { import("express-next-api").NextApi<{tag?: string}, {}, {q: string}> } 
 */
exports.get = async (req, res) => {
    try {
        const table = req.params.tag ? 'skillLab' : 'skill';
        const where = {
            tag: { contains: req.query.q.replace(/[^\w#&*]/g, '').toLocaleLowerCase() }
        };

        const select = { uuid: true, tag: true, title: true }

        if (table === 'skill') {
            select.libs = { select: { uuid: true, tag: true, title: true } };
        } else {
            where.skill = { uuid: req.params.tag };
        }

        // @ts-ignore
        const data = await db[table].findMany({
            where,
            select: { uuid: true, tag: true, title: true },
            take: 20
        })

        res.json(data);

    } catch (error) {
        console.log(error)
        res.sendStatus(400);
    }
}

/**
 * @type { import("express-next-api").NextApi<_, { title: string }> } 
 */
exports.post = async (req, res) => {
    try {
        const title = req.body.title.Capitalize();
        const tag = req.body.title.replace(/[^\w#&*]/g, '').toLocaleLowerCase();

        /** @type {import('@prisma/client').Prisma.CandidateUpdateArgs } */
        const args = {
            where: { nick: req.subscription },
            select: md.candidates.select,
            data: {
                skills: {
                    connectOrCreate: {
                        where: { tag }, create: { title, tag }
                    }
                }
            }
        }
        console.log(args.data.skills);
        const data = await db.candidate.update(args);
        return res.dispatch('candidate:mount', data);

    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
}