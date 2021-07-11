const Anime_search = require("../client/Anime_search");
const AnimeList = require("../models/AnimeList");
let anime_search = new Anime_search;

module.exports = class Anime_search_controller{

    async apiSearch(title){

        let resp = await anime_search.searchJikanAnime(title);
        return new AnimeList(resp);
    }
    
}
