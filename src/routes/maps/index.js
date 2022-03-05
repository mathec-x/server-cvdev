const geocoder = require("../../services/Geocoder")

const ck_lat = /^(-?[1-8]?\d(?:\.\d{1,18})?|90(?:\.0{1,18})?)$/;

/**
 * @typedef {{number: any, street: string, neighborhood: string, city: string, state: string, cep: string, uf: string}} Qs
 * 
 * @type { import("express-next-api").NextApi<_,_, {q:string}> } 
 */


exports.get = async (req,res) => {
    if(!req.query.q){
        return res.status(404).json({msg: 'missing search ?q='})
    }
    
    if(ck_lat.test(req.query.q)){
        const data = await geocoder.reverse(req.query.q);
        return res.json( data );
    }

    const data = await geocoder.geocode(req.query.q);
    return res.json( data );
}