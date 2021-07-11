const axios = require("axios");

module.exports = class Anime_request{

    requestJikanId(id){
        
        let resp = axios.get("https://api.jikan.moe/v3/anime/" + id)
        .then( (response) => {
            return response.data;
        }
        ).catch((response) => {
            return response;
        })
        return resp;
    }
}