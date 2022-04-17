import axios from "axios";

function isBase64(/** @type {string} */ text) {
    return text.startsWith('data:image');
}

export const urlToB64 = async (/** @type {string} */ url) => {

    if(!url){
        return undefined;
    }

    if(isBase64(url)){
        return url;
    }

    try {
        let res = await axios.get(url, { responseType: 'arraybuffer' });
        return 'data:' + res.headers['content-type'] + ';base64,' + Buffer.from(res.data).toString('base64');
        
    } catch (error) {
        console.log(error);
        return undefined;
    }
    
};

export const getFavicon = async (/** @type {string} */ url) => {
    // https://s2.googleusercontent.com/s2/favicons?domain=
    try {
        let res = await axios.get('https://s2.googleusercontent.com/s2/favicons?domain='+url, { responseType: 'arraybuffer' });
        return 'data:' + res.headers['content-type'] + ';base64,' + Buffer.from(res.data).toString('base64');
        
    } catch (error) {
        console.log(error);
        return undefined;
    }
}

/**
 * @returns { Promise<import('@prisma/client').Prisma.CandidateUpdateInput> }
 */
export const validateBody = async (req) => {
    if(req.link){
        const icon = await getFavicon(req.link);
        if(!req.links){
            req.links = {}
        }
        if(req.link && icon){
            req.links[req.link] = icon;
        }
    }
    if(req.image){
        req.image = await urlToB64(req.image);
    }

    console.log(req.links);
    return {
        links: req.links || undefined,
        image: req.image || undefined,
        name: req.name || undefined,
        nick: req.nick || undefined,
        email: req.email || undefined,
        about: req.about || undefined,
        addressLine: req.addressLine || undefined,
    }
}