const express = require('express')
const useragent = require('express-useragent');
const cors = require('cors');
const compression = require('compression');
const http = require('http');
const expressSocket = require('./_middlewares/express-socket');
const { nextApi } = require('express-next-api');
const { Server } = require('socket.io');
const ioparser = require('socket.io-msgpack-parser');
const accessToken = require('./_middlewares/access-token');
const handshakeToken = require('./_middlewares/handshake-token');
const socketConnection = require('./_middlewares/socket-connection');

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    parser: process.env.NODE_ENV === 'production' ? ioparser : null,
    cors: {
        origin: '*'
    }
});

io
.use(handshakeToken)
.on('connection', socketConnection);

app.use(cors())
    .use(accessToken)
    .use(expressSocket(io))
    .use(compression())
    .use(express.urlencoded({ extended: true }))
    .use(express.json({ type: ['application/json', 'text/plain'] }))
    .use(useragent.express())
    .use(nextApi())

module.exports = { io, app: server };