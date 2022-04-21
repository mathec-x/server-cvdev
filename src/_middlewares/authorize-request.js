import db from "../../prisma";

const white_list_paths = [
    '/api/login'
]

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
    console.log({path: req.path, subscription: req.subscription})
    if (unauthorized_methods.includes(req.method) && !white_list_paths.includes(req.path) ) {

        /** @type {import('@prisma/client').Prisma.UserFindFirstArgs } */
        const findFirstArgs =  {
            where: !req.subscription ? {
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
        console.log({match: !!match});
        
        if (!req.user || !match) {
            console.log('unauthorized', req.path, req.socketId, req.method, 401)
            return res.sendStatus(401)
        }
    }

    next();
};

export default authorizeRequest;