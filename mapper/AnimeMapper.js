const Anime = require("../models/Anime.js");
let anime = new Anime;

module.exports = class AnimeMapper{

    json_to_anime(jsonResponse){
        anime = {
        id: jsonResponse.mal_id,
        title: jsonResponse.title,
        synopsis: jsonResponse.synopsis,
        episodes: jsonResponse.episodes,
        status: jsonResponse.status,
        rating: jsonResponse.rating,
        image: jsonResponse.image_url
        }
        return anime;
    }
}
