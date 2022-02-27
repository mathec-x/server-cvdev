const db = require('../../../prisma');

/**
 * @type { import("express-next-api").NextApi<{skill: string}, {}, {q: string}> } 
 */
exports.get = async (req, res) => {
    try {
        const table = req.params.skill ? 'skillLab' : 'skill';
        const where = {
            tag: { contains: req.query.q }
        };

        const select = { uuid: true, tag: true, title: true }

        if(table === 'skill'){
            select.libs = {select: { uuid: true, tag: true, title: true }};
        } else {
            where.skill = { uuid: req.params.skill };
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
 * @type { import("express-next-api").NextApi<{}, { title: string, skill: string }> } 
 */
exports.post = async (req, res) => {

    try {
        const skill = req.body.skill ? req.body.skill.replace(/[^\w#&*]/g, '').toLocaleLowerCase() : '';
        const title = req.body.title.Capitalize();
        const tag = title.toLocaleLowerCase().replace(/[^\w#&*]/g, '').toLocaleLowerCase();

        const data = await db.skill.upsert({
            where: { tag: skill },
            create: {
                title,
                tag: tag
            },
            update: {
                libs: {
                    create: {
                        title,
                        tag: skill + tag
                    }
                }
            }
        });

        console.log(data, { title, tag: skill + tag });

        res.dispatch('skills:create', data)
    } catch (error) {
        console.log(error)
        res.sendStatus(400);
    }
}