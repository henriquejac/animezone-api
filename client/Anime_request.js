const axios = require("axios");

module.exports = class Anime_request{

    requestJikanId(id){
        console.log("entrou na anime_request");

        let resp = axios.get("https://api.jikan.moe/v3/anime/" + id)
        .then( (response) => {
            console.log(response.data);
            return response.data;
        }
        ).catch((response) => {
            return response;
        })
        return resp;
    }
}