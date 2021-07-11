const AnimePreview = require("../models/AnimePreview");
let animePreview = new AnimePreview;

module.exports = class AnimeMapper{

    json_to_anime(jsonResponse){
        animePreview = {
        id: jsonResponse.mal_id,
        title: jsonResponse.title,
        synopsis: jsonResponse.synopsis,
        episodes: jsonResponse.episodes,
        rating: jsonResponse.rated,
        image: jsonResponse.image_url
        }
        return animePreview;
    }
}
