const jwt = require('jsonwebtoken');

/** 
 * @param {import('socket.io').Socket} socket 
 * @param {import('express').NextFunction} next 
 */
const handshakeToken = (socket, next) => {
  const { token } = socket.handshake.auth;
  if (token) {
    const data = jwt.verify(token, process.env.JWT_SECRET);
    if (typeof data === 'object') {
      socket.user = { ...data, token };
    }
  }


  next();
};

module.exports = handshakeToken;