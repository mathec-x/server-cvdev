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


export const validateBody = async (req) => {
    if(req.image){
        req.image = await urlToB64(req.image);
    }
    return {
        image: req.image || undefined,
        name: req.name || undefined,
        nick: req.nick || undefined,
        email: req.email || undefined,
        about: req.about || undefined,
    }
}