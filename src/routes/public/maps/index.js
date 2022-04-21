import { reverse, geocode } from "../../../services/Geocoder";

const ck_lat = /^(-?[1-8]?\d(?:\.\d{1,18})?|90(?:\.0{1,18})?)$/;

/**
 * @typedef {{number: any, street: string, neighborhood: string, city: string, state: string, cep: string, uf: string}} Qs
 * 
 * @type { import("express-next-api").NextApi<{},{}, {q:string}> } 
 */


export async function get(req,res) {
    if(!req.query.q){
        return res.status(404).json({msg: 'missing search ?q='})
    }
    
    if(ck_lat.test(req.query.q)){
        const data = await reverse(req.query.q);
        return res.json( data );
    }

    const data = await geocode(req.query.q);
    return res.json( data );
}