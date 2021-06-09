var express = require('express');
var router = express.Router();
const axios = require('axios');
const { response } = require('express');
const animeMapper = require("../mapper/AnimeMapper");

/* GET anime information by ID */
router.get('/:id', function(req, res, next) {
    mapper = new animeMapper;
    console.log(mapper.x);
  axios.get("https://api.jikan.moe/v3/anime/" + req.params.id)
    .then( function(response){
        let string = "oli"
        res.send(string);
        }
    )
    .catch(function (response) {
        console.log("Algo deu errado!!");
        console.log(response);
        res.send(response);
        }
    )
});

router.get('/search/', function(req, res, next) {
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
