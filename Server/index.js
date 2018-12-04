const express = require("express");
const app = express();

//const pokemons = require('./models/pokemon.js');

app.use(express.static(__dirname + '/views/public')); // for css files

app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
next();
});

require("./routes/pokedex.js")(app);


app.listen(1337, () => {
  console.log("Listening on port 1337");
});
