const fs = require('fs');
const jsonPokedex = './data/pokedex.json';
const Pokedex = JSON.parse(fs.readFileSync(jsonPokedex,'utf8'));

class pokemonModel {

/*** WELCOME PAGE ***/
  static welcome(req,res) {
    let pokemons = [];
    for (let pkmn in Pokedex) {
      pokemons.push(Pokedex[pkmn]);
    }

    res.send(pokemons);
  }

/*** READING ***/
  static getAll(res) {
    res.send(Pokedex);
  }

}

module.exports = pokemonModel;
