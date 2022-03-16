import db from "../../prisma";


/**
 *@param {import("express").Request} req 
 *@param {import("express").Response} res
 *@param {import("express").NextFunction} next 
 */
const authorizeRequest = async (req, res, next) => {

    if(['PUT', 'POST', "DELETE"].includes(req.method) && req.user && req.subscription ){
        if(!await db.candidate.findFirst({
            where: {
                user: {uuid: req.user.uuid},
                nick: req.subscription
            }
        })){

            return res.sendStatus(401)
        }
    }

    next();
};

export default authorizeRequest;