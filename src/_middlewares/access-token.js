
const jwt = require('jsonwebtoken');

const verify = async (/** @type {string} */ token, /** @type {import('express').Request} */ req) => {
    if (req.terminal === 'app')
        return jwt.verify(token, process.env.JWT_SECRET)

    if (req.terminal === 'api') {
        /**
         * @todo Implement api's
         */
    }

    throw "None Terminal";
}

/**
 * @type {(req: import("express").Request, res: import("express").Response,next: import("express").NextFunction) => any}
 */
const accessToken = (req, res, next) => {
    let /** @type {any} */ token;
    req.subscription = '';

    if (req.headers['x-access-token']) {
        req.terminal = 'app';
        token = req.headers['x-access-token'];

    } else if (req.headers['authorization']) {
        req.terminal = 'api';
        [, token] = req.headers['authorization'].split(' ');
    }

    if (!token)
        return res.status(401).json({ auth: false, message: 'No token provided.' });

    try {
        // const data = jwt.verify(token, req.terminal);
        if (req.headers['subscription'] && typeof req.headers['subscription'] === 'string') {
            req.subscription = req.headers['subscription']
        }

        verify(token, req).then(data => {
            /**
             * @todo Implement is token active
             */
            if (data && typeof data === 'object') {
                req.user = { ...data, token };
            }

            next();
        })

    } catch (error) {
        console.log('[jwt error catch]', error);
        return res.status(505).json({ auth: false, message: 'Failed to authenticate token.' });
    }
};

/** 
 * param {import('socket.io').Socket} socket 
 * param {import('express').NextFunction} next 
 */
// exports.handshakeAuth = (socket, next) => {
//   const { token } = socket.handshake.auth;
//   if (token) {
//     const data = jwt.verify(token, process.env.JWT_SECRET);
//     if (typeof data === 'object') {
//       socket.user = { ...data, token };
//     }
//   }


//   next();
// };

module.exports = accessToken;