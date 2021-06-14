let Anime = require("../models/Anime.js");

module.exports = class AnimeMapper{

    json_to_anime(jsonResponse){
        let anime = new Anime(jsonResponse.mal_id, jsonResponse.title, jsonResponse.synopsis, jsonResponse.episodes, jsonResponse.status, jsonResponse.rating);
        return anime;
    }
}
