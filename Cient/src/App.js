import React, { Component } from 'react';
import Pokedex from './Pokedex';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons : []
    };
    this.getAll = this.getAll.bind(this);
  }

  getAll() {
    fetch('http://localhost:1337/')
      .then(response => response.json() )
      .then(pkmns => {
        this.setState({ pokemons: pkmns });
      });
  }

  //<div className="App">
    //<Pokedex pokedex={this.state.data}/>
  //</div>

  render() {
    this.getAll();
    console.log(this.state.pokemons);
    return (
      <div>
        <h2>Pokédex !</h2>
          <ul>
            { this.state.pokemons.map( (pkmn)=> {
              return (
                <li key={pkmn.ndex}>
                  {pkmn.ndex}<br/>
                  {pkmn.nom}
                </li>
              )})
            }
          </ul>
      </div>
    );
  }
}

export default App;
