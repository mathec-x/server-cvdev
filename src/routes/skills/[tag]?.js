const db = require('../../../prisma');
const md = require('../../../prisma/selectors');

/**
 * @type { import("express-next-api").NextApi<{tag: string}, {}, {q: string}> } 
 */
exports.get = async (req, res) => {
    try {
        const table = req.params.tag ? 'skillLab' : 'skill';
        const where = {
            tag: { contains: req.query.q }
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
            select,
            take: 20
        })

        res.dispatch('skills:mount', data)
    } catch (error) {
        console.log(error)
        res.sendStatus(400);
    }
}

/**
 * @type { import("express-next-api").NextApi<{tag?: string}, { title: string }> } 
 */
exports.post = async (req, res) => {

    try {
        const title = req.body.title.Capitalize();
        const tag = req.body.title.replace(/[^\w#&*]/g, '').toLocaleLowerCase();
        console.log(req.subscription);
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

        if (req.params.tag) {
            const skill = req.params.tag ? req.params.tag.replace(/[^\w#&*]/g, '').toLocaleLowerCase() : '';

            args.data.skills = {
                update: {
                    where: { tag: req.params.tag },
                    data: {
                        libs: {
                            connectOrCreate: {
                                where: { tag: skill + tag },
                                create: {
                                    title,
                                    tag: skill + tag,
                                }
                            }
                        }
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

/**
 * @type { import("express-next-api").NextApi<{tag: string}, _, {lib?: string}> } 
 */
exports.delete = async (req, res) => {
    console.log(req.params.tag, req.query.lib);
    try {
        const data = await db.candidate.update({
            where: { nick: req.subscription },
            select: md.candidates.select,
            data: {
                skills: !req.query.lib
                    ? { disconnect: { tag: req.params.tag } }
                    : {
                        update: {
                            where: { tag: req.params.tag },
                            data: {
                                libs: {
                                    disconnect: { tag: req.query.lib }
                                }
                            }
                        }
                    }
            }
        });
        return res.dispatch('candidate:mount', data);

    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
}