const mapper = require("../mapper/AnimeMapper");


module.exports = class AnimeList{

    constructor(animes){
        this.animes = animes.results.map((anime) => {
            return mapper.json_to_anime(anime);
        });
    }
}