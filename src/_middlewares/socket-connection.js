import db from '../../prisma';
import * as md from '../../prisma/selectors';

/** 
 * @type { (io: import('socket.io').Server) => (socket: import('socket.io').Socket) => void } 
 */
const socketConnection = (io) => (socket) => {
    if (socket.user) {
        socket.join(socket.user.uuid);
        socket.emit('dispatch', { type: 'candidate:mount', payload: {} });
        try {
            db.user.findFirst({
                where: { uuid: socket.user.uuid },
                select: md.user.select
            }).then(({ candidates, ...user }) => {
                console.log('socket', socket.id, user.email);
                socket.emit('dispatch', { type: 'user:mount', payload: { ...user, token: socket.user.token } });
                socket.emit('dispatch', { type: 'candidates:mount', payload: candidates });
            }).catch( (err) => {
                console.log(err)
            });

        } catch (error) {
            console.log(error);
        }
    } else {
        socket.emit('dispatch', { type: 'user:mount', payload: {} });
        socket.emit('dispatch', { type: 'candidates:mount', payload: [] });
    }

    socket.on('subscribe', (nick) => {
        // socket.emit('dispatch', { type: 'candidate:mount', payload: {} });

        const where = { nick };
        if(!nick.startsWith("@")){
            where.user = { uuid: socket.user ? socket.user.uuid : '' }
        }
        db.candidate.findFirst({
            where,
            select: md.candidate.select
        }).then((candidate) => {
            if(candidate){
                // console.log(nick, candidate, socket.user);
                console.log('subscribe to', nick);
                socket.join(candidate.nick);
                socket.emit('subscribe', candidate.nick)
                socket.emit('dispatch', { type: 'candidate:mount', payload: candidate });
            } else {
                throw "candidate not found";
            }
        }).catch((error) => {
            console.log(error)
            // socket.emit('candidate:not-found');
            socket.emit('dispatch', { type: 'candidate:mount', payload: { notFound: true } });
        }).finally(async () => {
            io.in(nick).emit('subscriptions', (await io.in(nick).allSockets()).size);

        })
    })

    socket.on('unsubscribe', async (nick) => {
        console.log('unsubscribe to', nick);
        socket.emit('unsubscribe');
        // socket.emit('dispatch', { type: 'candidate:mount', payload: {} });
        socket.leave(nick);
        socket.emit('dispatch', { type: 'candidate:mount', payload: {} });
        io.in(nick).emit('subscriptions', (await io.in(nick).allSockets()).size);
    })
}

export default socketConnection;