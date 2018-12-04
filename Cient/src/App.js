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
    console.log(this.state.pokemons[54]);
    return (
      <div>
        <h2>Pokédex !</h2>
          <ul>
            { this.state.pokemons.map( (pkmn)=> {
              return (
                <li key={pkmn.ndex}>
                  {pkmn.nom}<br/>
                  <ul>Details :
                    { Object.keys(pkmn).map( (key) => {
                      if(key==='attaques') {
                        return ( <li>Attaques :
                                    <ul>{ pkmn[key].map( (atk)=> {
                                       return Object.values(atk).map((v)=> v);
                                    } )}</ul>
                                </li>);
                      } else {
                        return (
                          <li key={key}>{key} : {JSON.stringify(pkmn[key])}
                          </li>
                        )
                      }
                    }) }
                    <a href="'.{url}.'"></a>
                  </ul>
                </li>
              )})
            }
          </ul>
      </div>
    );
  }
}

export default App;
