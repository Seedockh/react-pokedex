const pokemonModel = require("../models/pokemons.js");
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

function pokedex(router) {

router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

/*** WELCOME PAGE ***/
  router.get("/",(req,res)=>{
    pokemonModel.welcome(req,res);
  });

  router.get("/pokemons", async function(req, res) {
    pokemonModel.getAll(res);
  });

  /*router.post("/search",(req,res)=>{
    const data = {
      nickname: req.body.nickname,
      password: req.body.password
    }
    userModel.getHubInfo(data,req,res);
  })

  router.get('/dashboard',(req,res)=>{
    let userinfos = JSON.stringify(req.session.userinfos,null,2);
    let msg = req.session.msg;
    //console.log(userinfos);
    //console.log(msg);
    res.render('dashboard.ejs',{ infos: userinfos, message : msg})
  })*/

}

module.exports = pokedex;
