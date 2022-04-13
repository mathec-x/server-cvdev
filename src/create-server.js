import https from 'https';
import http from 'http';
import fs from 'fs';

/**
 * @param {{ (req: http.IncomingMessage, res: http.ServerResponse): void; (req: http.IncomingMessage, res: http.ServerResponse): void; }} app
 */
export default function createServer(app) {
    // @ts-ignore
    // if (process.env.HTTPS && (!process.env.NODE_ENV || process.env.NODE_ENV === 'development')) {
    //     const key = fs.readFileSync('../.cert/key.pem');
    //     const cert = fs.readFileSync('../.cert/cert.pem')
    //     const options = {
    //         key,
    //         cert
    //     };
    //     return https.createServer(options, app)
    // }

    return http.createServer(app);
};