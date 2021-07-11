const axios = require("axios");

module.exports = class Anime_search{

    async searchJikanAnime(title){
        let resp = await axios.get("https://api.jikan.moe/v3/search/anime?q=" + title)
            .then( function(response){
                return response.data;
                }
            )
            .catch(function (response) {
                console.log("Algo deu errado!!");
                console.log(response);
                return response;
                }
            )
        return resp;
    }
}