let Anime = require("../models/Anime.js");

module.exports = class AnimeMapper{

    json_to_anime(jsonResponse){
        let anime = {
        id: jsonResponse.mal_id,
        title: jsonResponse.title,
        synopsis: jsonResponse.synopsis,
        episodes: jsonResponse.episodes,
        status: jsonResponse.status,
        rating: jsonResponse.rating
        }
        return anime;
    }
}
