const express = require('express')
const useragent = require('express-useragent');
const cors = require('cors');
const compression = require('compression');
const http = require('http');
const expressSocket = require('./_middlewares/express-socket');
const { nextApi } = require('express-next-api');
const { Server } = require('socket.io');
const ioparser = require('socket.io-msgpack-parser');

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    parser: process.env.NODE_ENV === 'production' ? ioparser : null,
    cors: {
        origin: '*'
    }
});

io.on('connection', (socket) => {
    console.log('socket', socket.id)
});

app.use(cors())
    .use(expressSocket(io))
    .use(compression())
    .use(express.urlencoded({ extended: true }))
    .use(express.json({ type: ['application/json', 'text/plain'] }))
    .use(useragent.express())
    .use(nextApi())

module.exports = { io, app: server };