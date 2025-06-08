import db from '../../../../prisma';
import * as md from '../../../../prisma/selectors';
import axios from 'axios';
import { urlToB64 } from '../candidates/_helpers';

/**
 * @type { import("express-next-api").NextApi<{tag?: string}, {}, {q: string}> } 
 */
export async function get(req, res) {
    try {
        const skill = req.params.tag ? req.params.tag.replace(/[^\w#&*]/g, '').toLocaleLowerCase() : '';

        const where = {};

        where['Skill'] = { tag: skill };

        if (req.query.q !== '*') {
            where['tag'] = {
                contains: req.query.q
            }
        };

        const data = await db.lib.findMany({
            where: where,
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
 * @type { import("express-next-api").NextApi<{tag: string}, Partial<import('@prisma/client').Skill>> } 
 */
export async function put(req, res) {
    try {

        if (!req.user.super) {
            console.log(req.user.uuid, 'is not super', req.user.super);
            return res.status(401).json({ msg: 'should be super to update a skill' })
        }

        if (req.body.image) {
            req.body.image = await urlToB64(req.body.image);
        }

        await db.skill.update({
            where: { tag: req.params.tag },
            data: req.body
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
 * @type { import("express-next-api").NextApi<{tag: string}, { title: string }> } 
 */
export async function post(req, res) {
    try {
        const title = req.body.title.Capitalize();
        const tag = req.body.title.replace(/[^\w#&*]/g, '').toLocaleLowerCase();
        const skill = req.params.tag ? req.params.tag.replace(/[^\w#&*]/g, '').toLocaleLowerCase() : '';

        console.log(req.user.uuid, skill + tag, tag,)

        await db.lib.upsert({
            where: { tag: skill + tag },
            update: {
                Skill: { connect: { tag: skill } },
                candidates: {
                    connect: { nick: req.subscription }
                }
            },
            create: {
                title,
                tag: skill + tag,
                Skill: { connect: { tag: skill } },
                candidates: {
                    connect: { nick: req.subscription }
                }
            }
        });

        const candidate = await db.candidate.findFirst({
            where: { nick: req.subscription },
            ...md.candidate
        });

        return res.to(req.subscription).dispatch('candidate:mount', candidate);

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
        console.log(req.subscription, 'delete', req.params);
        const data = await db.candidate.update({
            where: { nick: req.subscription },
            select: md.candidate.select,
            data: {
                libs: {
                    disconnect: {
                        tag: req.params.tag
                    }
                }
            }
        });
        return res.to(req.subscription).dispatch('candidate:mount', data);

    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
}