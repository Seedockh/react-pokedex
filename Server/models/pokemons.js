const fs = require('fs');
const jsonPokedex = './data/pokedex.json';
const Pokedex = JSON.parse(fs.readFileSync(jsonPokedex,'utf8'));

class pokemonModel {

/*** WELCOME PAGE ***/
  static welcome(req,res) {
    let pokemons = [];
    for (let pkmn in Pokedex) {
      pokemons.push(Pokedex[pkmn]);
      pokemons.map((p)=> {
       p.attaques.map((a)=> {
         a.niveau = a.niveau==="Départ" ? "N.1" : a.niveau;
         if(a.precision==="-") a.precision = 0;
         if(a.puissance==="-") a.puissance = 0;
       })
     });
      pokemons.sort( (prev,next)=> (prev.ndex-next.ndex) );
    }

    res.send(pokemons);
    //**@ Prettiest display :
    //res.send(`<pre>${JSON.stringify(pokemons,null,2)}</pre>`);
  }

/*** READING ***/
  static getAll(res) {
    res.send(Pokedex);
  }

}

module.exports = pokemonModel;
