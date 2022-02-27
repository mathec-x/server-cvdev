const db = require("../../../prisma");
const bcrypt = require('bcrypt');
const jsonwebtoken = require("jsonwebtoken");
/**
 * @type { import("express-next-api").NextApi<{}, { login: string, password: string }> } 
 */
 exports.post = async (req, res) => {
    let status = 200;
    try {
        const include = {
            candidates: true
        }

        let user = await db.user.findFirst({
            include,
            where: { email: req.body.login },
        });

        
        if(!user){
            user = await db.user.create({
                include,
                data: {
                    email: req.body.login,
                    password: bcrypt.hashSync(req.body.password, 10)
                },
            });

            status = 201;
        }

        if(bcrypt.compareSync(req.body.password, user.password)){
            
            const token = jsonwebtoken.sign({
                uuid: user.uuid,
                browser: req.useragent.browser,
                os: req.useragent.os,
                platform: req.useragent.platform,
                ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress 
            }, process.env.JWT_SECRET)

            const userData = {
                token,
                uuid: user.uuid,
                email: user.email
            }

            res.$emit('login', token);
            res.$emit('dispatch', { type: 'cadidates:mount', payload: user.candidates });
            res.$emit('dispatch', { type: 'user:mount', payload: userData });

            return res.sendStatus(status);
        }

        return res.sendStatus(401);
    } catch (error) {
        console.log(error)
        res.sendStatus(400);
    }
}