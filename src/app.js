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
const path = require('path');
const authorizeRequest = require('./_middlewares/authorize-request');

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    parser: ioparser, // process.env.NODE_ENV === 'production' ? ioparser : null,
    cors: {
        origin: '*'
    }
});

io
    .use(handshakeToken)
    .on('connection', socketConnection(io));

app.use(cors())
    .use(accessToken)
    .use(compression())
    .use(express.urlencoded({ extended: true }))
    .use(express.json({ type: ['application/json', 'text/plain'] }))
    .use(useragent.express())
    .use(authorizeRequest)
    .use(expressSocket(io))
    .use(nextApi({base: '/api'}))

app.use(express.static(path.resolve(__dirname, '../public')));
app.get('*', (_, res) => {
    res.sendFile(path.resolve(__dirname, '../public', 'index.html'));
});

module.exports = { io, app: server };