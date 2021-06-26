var express = require('express');
var router = express.Router();
const axios = require('axios');
const { response } = require('express');
const AnimeController = require("../controllers/Anime_controller");

let animeController = new AnimeController;

/* GET anime information by ID */
router.get('/:id', async function(req, res, next) {

    let anime = await animeController.apiRequest(req.params.id);
    console.log(anime);
    res.send(anime);
});

router.get('', async function(req, res, next) {

    axios.get("https://api.jikan.moe/v3/search/anime?q=" + req.query.title)
      .then( function(response){
          res.send(response.data);
          }
      )
      .catch(function (response) {
          console.log("Algo deu errado!!");
          console.log(response);
          res.send(response);
          }
      )
});


module.exports = router;
