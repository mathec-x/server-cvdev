import db from "../../../prisma";
import { hashSync, compareSync } from 'bcrypt';
import { sign } from "jsonwebtoken";
/**
 * @type { import("express-next-api").NextApi<{}, { login: string, password: string }> } 
 */
 export async function  post(req, res) {
    let status = 200;
    try {
        if(!req.body.login.TestMail()){
            throw "Invalid email";
        }


        let user = await db.user.findFirst({
            where: { email: req.body.login },
        });

        
        if(!user){
            user = await db.user.create({
                data: {
                    email: req.body.login,
                    password: hashSync(req.body.password, 10)
                },
            });

            status = 201;
        }

        if(compareSync(req.body.password, user.password)){
            
            const token = sign({
                uuid: user.uuid,
                browser: req.useragent.browser,
                os: req.useragent.os,
                platform: req.useragent.platform,
                super: user.super,
                ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress 
            }, process.env.JWT_SECRET)

            const userData = {
                token,
                uuid: user.uuid,
                email: user.email
            }

            return res.status(status).json(userData);
        }

        return res.sendStatus(401);
    } catch (error) {
        let status = 400;
        if(error === 'Invalid email'){
            status = 401;
        }

        console.log(error)
        res.sendStatus(401);
    }
}