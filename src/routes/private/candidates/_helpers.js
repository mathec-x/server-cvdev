import axios from "axios";
import { PrismaClientKnownRequestError, PrismaClientUnknownRequestError } from "@prisma/client/runtime";

export const CandidateErrors = (error) => {
    let responseError = error;

    if (error instanceof PrismaClientKnownRequestError) {
        // @ts-ignore
        responseError = error.meta.target ? `Unavailable ${error.meta.target.join(',')}` : error.code;
    }

    return responseError;
}

function isBase64(/** @type {string} */ text) {
    return text.startsWith('data:image');
}

export const urlToB64 = async (/** @type {string} */ url) => {
    console.log('urlToB64', url);

    if (!Boolean(url)) {
        return undefined;
    }

    if (isBase64(url)) {
        return url;
    }

    try {
        let res = await axios.get(url, { responseType: 'arraybuffer' });
        return 'data:' + res.headers['content-type'] + ';base64,' + Buffer.from(res.data).toString('base64');

    } catch (error) {
        console.log(error.message);
        return undefined;
    }

};

export const getFavicon = async (/** @type {string} */ url) => {
    // https://s2.googleusercontent.com/s2/favicons?domain=
    try {
        let res = await axios.get('https://s2.googleusercontent.com/s2/favicons?domain=' + url, { responseType: 'arraybuffer' });
        return 'data:' + res.headers['content-type'] + ';base64,' + Buffer.from(res.data).toString('base64');

    } catch (error) {
        console.log(error.message);
        return undefined;
    }
}

/**
 * @returns { Promise<import('@prisma/client').Prisma.CandidateUpdateInput> }
 */
export const validateBody = async (req) => {
    if (req.link) {
        const icon = await getFavicon(req.link);
        if (!req.links) {
            req.links = {}
        }
        if (req.link && icon) {
            req.links[req.link] = icon;
        }
    }

    if (req.nick) {
        req.nick = req.nick.replace(' ', '');

        if (req.nick.length < 5) throw 'Invalid nick';
    }

    if (req.image) {
        req.image = await urlToB64(req.image);
    }

    if (req.birthday) {
        req.birthday = new Date(req.birthday.split('-'));
    }

    if (req.email) {
        req.email = req.email.TestMail() ? req.email : null;
    }

    if (req.name) {
        req.name = req.name.TestName() ? req.name : null;
    }

    return {
        birthday: req.birthday || undefined,
        links: req.links || undefined,
        image: req.image || undefined,
        name: req.name || undefined,
        nick: req.nick || undefined,
        email: req.email || undefined,
        about: req.about || undefined,
        addressLine: req.addressLine || undefined,
    }
}