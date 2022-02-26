const io = require("../io");

const writelog = (title, value) => {
  if(process.env.NODE_ENV !== 'production'){
    console.log("\n_______________________________");
    console.log('['+title+']');
    console.log(value);
  }
}

/**
 * @type {(req: import("express").Request, res: import("express").Response,next: import("express").NextFunction) => any}
 */
 const expressSocket = (req, res, next) => {
    req.socketId = typeof req.headers['socket-id'] === 'string' && req.headers['socket-id'] ? req.headers['socket-id'] : null;
    let to = req.socketId;

    res.to = (x) => {
      to = x;
      return res;
    };
  
    res.toSubscribe = () => {
      writelog('socket.req.subscription', req.subscription)
      to = 'subscribed::' + req.subscription;
      return res;
    };
  
  
    res.dispatch = (type, payload) => {
      if (!to || req.query.noDispatch) {
        writelog('dispatch json data');
        return res.header('dispatch', type).json(payload);
  
      } else {
        writelog('dispatch socket event', {to});
          
        if (to instanceof Array) {
          to.forEach((room) => {
            io.to(room).emit('dispatch', { type, payload });
          });
  
        } else {
          io.to(to).emit('dispatch', { type, payload });
        }
  
        return res.sendStatus(200);
      }
    }
  
    next();
  };
  
  module.exports = expressSocket;