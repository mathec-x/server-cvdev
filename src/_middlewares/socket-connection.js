const db = require('../../prisma');
const md = require('../../prisma/selectors');

/** 
 * @type { (io: import('socket.io').Server) => (socket: import('socket.io').Socket) => void } 
 */
const socketConnection = (io) => (socket) => {
    if (socket.user) {
        socket.join(socket.user.uuid);
        try {
            db.user.findFirst({
                where: { uuid: socket.user.uuid },
                select: md.user.select
            }).then(({ candidates, ...user }) => {
                console.log('socket', socket.id, user.email);
                socket.emit('dispatch', { type: 'user:mount', payload: { ...user, token: socket.user.token } });
                socket.emit('dispatch', { type: 'candidates:mount', payload: candidates });
            });

        } catch (error) {
            console.log(error);
        }
    } else {
        socket.emit('dispatch', { type: 'user:mount', payload: {} });
        socket.emit('dispatch', { type: 'candidates:mount', payload: [] });
    }

    socket.on('subscribe', (nick) => {
        db.candidate.findFirst({
            where: { nick },
            select: md.candidate.select
        }).then((candidate) => {
            console.log('subscribe to', nick);
            socket.join(candidate.nick);
            socket.emit('subscribe', candidate.nick)
            socket.emit('dispatch', { type: 'candidate:mount', payload: candidate });

        }).catch(() => {
            socket.emit('dispatch', { type: 'candidate:mount', payload: {} });
        }).finally(async () => {
            io.in(nick).emit('subscriptions', (await io.in(nick).allSockets()).size);
        })
    })

    socket.on('unsubscribe', async (nick) => {
        console.log('unsubscribe to', nick);
        socket.emit('unsubscribe');
        // socket.emit('dispatch', { type: 'candidate:mount', payload: {} });
        socket.leave(nick);
        io.in(nick).emit('subscriptions', (await io.in(nick).allSockets()).size);
    })
}

module.exports = socketConnection;