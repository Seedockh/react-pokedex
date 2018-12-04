import React, {Component} from 'react';
import Pokemon from './Pokemon'

class Pokedex extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return(
      <div>
        <h2>Pokédex !</h2>
          <p>{this.props.pokedex}</p>
      </div>
    );
  }
}

export default Pokedex;
