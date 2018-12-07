const pokemonModel = require("../models/pokemons.js");
const express = require('express');

function pokedex(router) {

/*** WELCOME PAGE ***/
  router.get("/", async (req,res)=>{
    pokemonModel.getAll(req,res);
  });

/*** GETONE PAGE ***/
  router.get("/:idpoke", async (req,res)=>{
    pokemonModel.getOne(req.params.idpoke,req,res);
  });

/*** SEARCH POKEMON(S) ***/
  router.get("/:strsearch", async (req,res)=>{
    pokemonModel.search(req.params.strsearch,req,res);
  });

}

module.exports = pokedex;
