import express from 'express';
import useragent from 'express-useragent';
import cors from 'cors';
import compression from 'compression';
import { nextApi } from 'express-next-api';
import { resolve } from 'path';

import expressSocket from './_middlewares/express-socket';
import accessToken from './_middlewares/access-token';
import handshakeToken from './_middlewares/handshake-token';
import socketConnection from './_middlewares/socket-connection';
import authorizeRequest from './_middlewares/authorize-request';

import { Server } from 'socket.io';
import ioparser from 'socket.io-msgpack-parser';
import createServer from './create-server';

export const app = express();

export const server = createServer(app);
export const io = new Server(server, {
    parser: ioparser, // process.env.NODE_ENV === 'production' ? ioparser : null,
    cors: {
        origin: '*'
    }
});

io.use(handshakeToken).on('connection', (socket) => {
    console.log('connection');
    return socketConnection(io)(socket);
});

app
    .use(cors())
    .use(accessToken)
    .use(compression())
    .use(express.urlencoded({ extended: true }))
    .use(express.json({ type: ['application/json', 'text/plain'] }))
    .use(useragent.express())
    .use(expressSocket(io))
    .use(nextApi({
        base: '/api',
        directory: 'src/routes/public'
    }))
    .use(authorizeRequest, nextApi({
        base: '/api',
        directory: 'src/routes/private'
    }))
    

app.use(express.static(resolve(__dirname, '../public')));
app.get('*', (_, res) => {
    res.sendFile(resolve(__dirname, '../public', 'index.html'));
});