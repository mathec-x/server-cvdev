/**
 * 
 * @param {string} title 
 * @param {any} value 
 */

const writelog = (title, value) => {
  if(process.env.NODE_ENV !== 'production'){
    console.log("\n\x1b[35m["+title+"]\x1b[0m");
    console.log(value);
  }
}

/**
 * @type {(io: import('socket.io').Server ) => (req: import("express").Request, res: import("express").Response,next: import("express").NextFunction) => any}
 */
 const expressSocket = (io) => (req, res, next) => {
    req.socketId = typeof req.headers['socket-id'] === 'string' && req.headers['socket-id'] ? req.headers['socket-id'] : null;

    /**
     * @type {string|string[]}
     */
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
  
    res.$emit = (event, data) => {
      io.to(to).emit(event, data)
    }

    res.dispatch = (type, payload) => {
      if (!to || req.query.noDispatch) {
        writelog('dispatch json data');
        return res.header('dispatch', type).json(payload);
  
      } else {
        writelog(`${req.socketId} dispatch socket event to`, to);
          
        if (to instanceof Array) {
          for (let index = 0; index < to.length; index++) {
            io.to(to[index]).emit('dispatch', { type, payload });            
          }  
        } else {
          io.to(to).emit('dispatch', { type, payload });
        }
  
        return res.sendStatus(200);
      }
    }
  
    next();
  };
  
  module.exports = expressSocket;