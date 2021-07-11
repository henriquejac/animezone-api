var express = require('express');
var router = express.Router();
const axios = require('axios');
const { response } = require('express');
const Anime_Controller = require("../controllers/Anime_controller");
const Anime_Search_Controller = require("../controllers/Anime_search_controller");

let animeController = new Anime_Controller;
let animeSearchControler = new Anime_Search_Controller;

/* GET anime information by ID */
router.get('/:id', async function(req, res, next) {

    let anime = await animeController.apiRequest(req.params.id);
    res.send(anime);
});

router.get('', async function(req, res, next) {

    let AnimeList = await animeSearchControler.apiSearch(req.query.title);
    res.send(AnimeList);
});


module.exports = router;
