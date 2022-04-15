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
    console.log(req.path)
    if (unauthorized_methods.includes(req.method) && !white_list_paths.includes(req.path) ) {
        if (!req.user || !await db.candidate.findFirst({
            where: {
                user: { uuid: req.user.uuid },
                nick: req.subscription
            }
        })) {
            console.log('unauthorized', req.path, req.socketId, req.method, 401)
            return res.sendStatus(401)
        }
    }

    next();
};

export default authorizeRequest;