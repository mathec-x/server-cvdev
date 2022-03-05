const NodeGeocoder = require('node-geocoder');

/**
 * @typedef {{
 *  formattedAddress: string,
 *  latitude: number,
 *  longitude: number,
 *  country: string,
 *  city: string,
 *  stateCode: string,
 *  zipcode: string,
 *  streetName: string,
 *  streetNumber: string,
 *  countryCode: string,
 *  provider: string 
 * }} NodeGeocoderResponse 
 */

const OpenStreetMap = NodeGeocoder({
    provider: 'openstreetmap',
});

const BingStreetMap = NodeGeocoder({
    provider: 'virtualearth',
    apiKey: process.env.BING_API_KEY // Bing
});

/**
 * @param {string} string
 * @returns {NodeGeocoder.Entry[]}
 */
exports.geocode = async (string) => {
    let data = [];

    try {
        console.log("\n[search geocode OpenStreetMap]", string);
        data = await new Promise(
            (res, reject) => OpenStreetMap.geocode(string, (err, data) => (err) ? reject(err) : res(data))
        );
        if (data.length > 0) return data;

        console.log("\r[Notfound]\n");
    } catch {
        console.log("\n[catch geocode OpenStreetMap]\n", string)
    }

    if (process.env.BING_API_KEY) {
        try {
            console.log("\n[search geocode Bing]", string);
            data = await new Promise(
                (res, reject) => BingStreetMap.geocode(string, (err, data) => (err) ? reject(err) : res(data))
            );
            if (data.length > 0) return data;

            console.log("\r[Notfound]\n");
        } catch {
            console.log("\n[catch geocode BingCoord]\n", string);
        }
    }

    return data;
}

/**@return {NodeGeocoder.Entry[]}  */
exports.reverse = async ({ lat, lon }) => {

    try {
        return await OpenStreetMap.reverse({ lat, lon });
    }
    catch (error) {
        console.log('[catch reverse OpenStreetMap]', error);
    }

    if(process.env.BING_API_KEY){
        try {
            return await Bing.reverse({ lat, lon });
        }
        catch (error) {
            console.log('[catch reverse Bing]', error);
        }
    }

    return [];
}