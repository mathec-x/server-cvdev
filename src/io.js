const { Server } = require('socket.io');
const ioparser = require('socket.io-msgpack-parser');
const app = require('./app');

const io = new Server(app, {
    parser: process.env.NODE_ENV === 'production' ? ioparser : null,
    cors: {
        origin: '*'
    },
});

io.on('connection', (socket) => {
    console.log('socket', socket.id)
});

module.exports = io;