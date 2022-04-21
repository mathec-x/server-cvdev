import db from "../../prisma";

const unauthorized_methods = [
    'PUT',
    'POST',
    "DELETE"
]

/**
 *@param {import("express").Request} req 
 *@param {import("express").Response} res
 *@param {import("express").NextFunction} next 
 */
const authorizeRequest = async (req, res, next) => {
    try {
        if (unauthorized_methods.includes(req.method)) {
            console.log({ path: req.path, subscription: req.subscription })
            const allowNoSubscriptionsPost = (req.path === '/api/candidates' && req.method === 'POST');

            /** @type {import('@prisma/client').Prisma.UserFindFirstArgs } */
            const findFirstArgs = {
                where: allowNoSubscriptionsPost ? {
                    uuid: req.user.uuid
                } : {
                    uuid: req.user.uuid,
                    candidates: {
                        some: {
                            nick: req.subscription
                        }
                    }
                }
            }

            console.log(findFirstArgs);
            const match = await db.user.findFirst(findFirstArgs);
            console.log({ match: !!match });

            if (!req.user || !match) {
                console.log('[unauthorized in middleware]', req.socketId, req.method, 401)
                return res.sendStatus(401);
            }
        }

        next();
    } catch (error) {
        console.log('[unauthorized in middleware]', req.socketId, req.method, 403)
        return res.sendStatus(403)
    }
};

export default authorizeRequest;