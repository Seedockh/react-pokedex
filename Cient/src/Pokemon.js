import React, {Component} from 'react';

class Pokemon extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <h2>Pokedex</h2>
        <p>{this.props.pokedex}</p>
      </div>
    );
  }
}

export default Pokemon;
