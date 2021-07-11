const axios = require('axios');
const AnimeMapper = require("../mapper/AnimeMapper");
const Anime_request = require("../client/Anime_request");
let anime_request = new Anime_request;
let mapper = new AnimeMapper;


module.exports = class AnimeController{    

    async apiRequest(id){
        
        let resp = await anime_request.requestJikanId(id);
        

        return mapper.json_to_anime(resp);
        
    }
    
}