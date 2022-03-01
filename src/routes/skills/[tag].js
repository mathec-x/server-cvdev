const db = require('../../../prisma');
const md = require('../../../prisma/selectors');

/**
 * @type { import("express-next-api").NextApi<{tag: string}, { title: string }> } 
 */
exports.post = async (req, res) => {
    try {
        const title = req.body.title.Capitalize();
        const tag = req.body.title.replace(/[^\w#&*]/g, '').toLocaleLowerCase();
        const skill = req.params.tag ? req.params.tag.replace(/[^\w#&*]/g, '').toLocaleLowerCase() : '';

        /** @type {import('@prisma/client').Prisma.CandidateUpdateArgs } */
        const args = {
            where: { nick: req.subscription },
            select: md.candidates.select,
            data: {
                skills: {
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
    console.log(req.subscription, req.params.tag, req.query.lib);
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