import React, {Component} from 'react';
import Pokemon from './Pokemon';

class Pokedex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : []
    };
    this.getAll = this.getAll.bind(this);
    this.getOne = this.getOne.bind(this);
  }

  getAll() {
    fetch('http://localhost:1337/')
      .then(response => response.json() )
      .then(pkmns => this.setState({ data: pkmns }) );
  }

  getOne(id) {
    fetch('http://localhost:1337/'+id)
      .then(response=>response.json())
      .then(pkmn => this.setState({ data: pkmn }) );
  }

  render() {
    if(this.props.pokeid) {
      this.getOne(this.props.pokeid);
    }
    else {
      this.getAll();
    };
    return(
      <div className="content">
        <Pokemon data={this.state.data} displayAll={true} />
      </div>
    );
  }
}

export default Pokedex;
