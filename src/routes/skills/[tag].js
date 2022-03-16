import db from '../../../prisma';
import * as md from '../../../prisma/selectors';

/**
 * @type { import("express-next-api").NextApi<{tag?: string}, {}, {q: string}> } 
 */
export async function get(req, res) {
    try {
        const skill = req.params.tag ? req.params.tag.replace(/[^\w#&*]/g, '').toLocaleLowerCase() : '';

        const data = await db.lib.findMany({
            where: {
                Skill: {
                    tag: skill
                },
                tag: {
                    contains: req.query.q
                }
            },
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
 * @type { import("express-next-api").NextApi<{tag: string}, { title: string }> } 
 */
export async function post(req, res) {
    try {
        const title = req.body.title.Capitalize();
        const tag = req.body.title.replace(/[^\w#&*]/g, '').toLocaleLowerCase();
        const skill = req.params.tag ? req.params.tag.replace(/[^\w#&*]/g, '').toLocaleLowerCase() : '';

        console.log(req.user.uuid, skill+tag , tag, )

        await db.lib.upsert({
            where: { tag: skill + tag },
            update: {
                Skill: { connect: { tag: skill }},
                candidates: {
                    connect: { nick: req.subscription }
                }
            },
            create: {
                title,
                tag: skill + tag,
                Skill: { connect: { tag: skill }},
                candidates: {
                    connect: { nick: req.subscription }
                }
            }
        });

        const candidate = await db.candidate.findFirst({
            where: { nick: req.subscription },
            ...md.candidate
        });

        return res.dispatch('candidate:mount', candidate);

    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
}

/**
 * @type { import("express-next-api").NextApi<{tag: string}, {tag: string}> } 
 */
export async function del(req, res) {
    try {
        console.log(req.subscription, req.params.tag, req.body.tag);
        const data = await db.candidate.update({
            where: { nick: req.subscription },
            select: md.candidate.select,
            data: {
                libs: {
                    disconnect: {
                        tag: req.body.tag
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