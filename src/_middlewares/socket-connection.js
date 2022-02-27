const db = require('../../prisma');
const md = require('../../prisma/selectors');

/** 
 * @param {import('socket.io').Socket} socket 
 */
const socketConnection = async (socket) => {
    if(socket.user){        
        console.log('socket', socket.id, socket.user.uuid);
        socket.join(socket.user.uuid);
        
        const {candidates, ...user} = await db.user.findFirst({
            where: { uuid: socket.user.uuid },
            select: md.user.select
        })

        socket.emit('dispatch', { type: 'user:mount', payload: user });
        socket.emit('dispatch', { type: 'candidates:mount', payload: candidates });

    }
}

module.exports = socketConnection;