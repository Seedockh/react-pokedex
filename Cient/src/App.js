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

  render() {
    this.getAll();
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
                        return (
                          <li key={key}>Attaques :
                            <ul>{ pkmn[key].map( (atk)=> {
                               return (
                                  <li key={`${pkmn['nom']}${pkmn['ndex']++}`}>
                                    <ul>
                                      {Object.keys(atk).map((key)=> {
                                        return <li key={`${atk['nom']}${key}`}>{key} : {atk[key]}</li>
                                      })}
                                    </ul>
                                  </li>
                               )
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
