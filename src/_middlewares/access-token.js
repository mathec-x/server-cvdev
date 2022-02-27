const jwt = require('jsonwebtoken');

/**
 * @type {(req: import("express").Request, res: import("express").Response,next: import("express").NextFunction) => any}
 */
const accessToken = async (req, res, next) => {
    /** 
     * @type {any} 
     */ 
    let token;
    req.subscription = '';

    if (req.headers['x-access-token']) {
        req.terminal = 'app';
        token = req.headers['x-access-token'];

    } else if (req.headers['authorization']) {
        req.terminal = 'api';
        [, token] = req.headers['authorization'].split(' ');
    }

    if (req.headers['subscription'] && typeof req.headers['subscription'] === 'string') {
        req.subscription = req.headers['subscription']
    }

    try {
        if(token){
            const data = jwt.verify(token, process.env.JWT_SECRET);
            /**
             * @todo Implement is token active
             */
            if (data && typeof data === 'object') {
                req.user = { ...data, token };
            }
        }
    } catch (error) {
        console.log('[jwt error catch]', error);
        return res.status(505).json({ auth: false, message: 'Failed to authenticate token.' });
    }

    next();
};

module.exports = accessToken;