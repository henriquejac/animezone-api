const Mapper = require("../mapper/AnimePreviewMapper");
let mapper = new Mapper;


module.exports = class AnimeList{

    constructor(animes){
        
        this.animes = animes.results.map((anime) => {
            return mapper.json_to_anime(anime);
        });

        // this.qtd_elements = this.animes.keys(this.animes).lenght;
    }

    // get pages(num){
    //     var count, page_content, chunk = 5;
    //     for(count = this.qtd_elements;)
    // }

}