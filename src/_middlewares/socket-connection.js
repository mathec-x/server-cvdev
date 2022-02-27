const db = require('../../prisma');
const md = require('../../prisma/selectors');

/** 
 * @param {import('socket.io').Socket} socket 
 */
const socketConnection = (socket) => {
    if (socket.user) {
        socket.join(socket.user.uuid);
        try {
            db.user.findFirst({
                where: { uuid: socket.user.uuid },
                select: md.user.select
            }).then( ({ candidates, ...user }) => {
                console.log('socket', socket.id, user.email);
                socket.emit('dispatch', { type: 'user:mount', payload: {...user, token: socket.user.token} });
                socket.emit('dispatch', { type: 'candidates:mount', payload: candidates });
            });

        } catch (error) {
            console.log(error);
        }
    } else {
        socket.emit('dispatch', { type: 'user:mount', payload: {} });
        socket.emit('dispatch', { type: 'candidates:mount', payload: [] });
    }
}

module.exports = socketConnection;