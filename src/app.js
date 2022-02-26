const express = require('express')
const useragent = require('express-useragent');
const cors = require('cors');
const compression = require('compression');
const http = require('http');
const expressSocket = require('./_middlewares/express-socket');
const { nextApi } = require('express-next-api');

const app = express();

app.use(cors())
    .use(expressSocket)
    .use(compression())
    .use(express.urlencoded({ extended: true }))
    .use(express.json({ type: ['application/json', 'text/plain'] }))
    .use(useragent.express())
    .use(nextApi())

module.exports = http.createServer(app);