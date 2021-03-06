const fs = require('fs');
const jsonPokedex = './data/pokedex.json';
const Pokedex = JSON.parse(fs.readFileSync(jsonPokedex,'utf8'));

class pokemonModel {

/*** WELCOME PAGE ***/
  static getAll(req,res) {
    let pokemons = [];
    for (let pkmn in Pokedex) {
      pokemons.push(Pokedex[pkmn]);
      pokemons.map( p => {
       p.attaques.map( a => {
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
  static getOne(id,req,res) {
    let pokemon = [];
    if (id.length==1 && id!=="favicon.ico") {
      id = '00'+id
    } else if (id.length==2 && id!=="favicon.ico"){
      id = '0'+id;
    } else if (id.length>3 || parseInt(id)>151) {
      id = false;
    }
    Pokedex.map( (pkmn)=>{
      if (pkmn.ndex==id) {
        pokemon.push(pkmn);
      }
    });
    res.send(pokemon);
    //**@ Prettiest display :
    //res.send(`<pre>${pokemon}</pre>`);
  }

/*** SEARCHING ***/
  static search(str,req,res) {
    
  }
}

module.exports = pokemonModel;
