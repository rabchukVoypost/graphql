export {};
const axios = require("axios")

const coordinatesToPlacename  = async (lon:number,lat:number) => {
    let data = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/-${lon},${lat}.json?access_token=pk.eyJ1IjoiZ2VyZGVyb24iLCJhIjoiY2tsY2dxdGl5MG96NzJwczRicjJscHJvMSJ9.iL9o-il8YUR3U_A1bDCpjQ`)
    return data.data.features[0].place_name
}

module.exports = coordinatesToPlacename;