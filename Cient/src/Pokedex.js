import React, {Component} from 'react';
import Pokemon from './Pokemon';

class Pokedex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : [],
      displayAll: true,
    };
    this.getAll = this.getAll.bind(this);
    this.getOne = this.getOne.bind(this);
  }

  getAll() {
    fetch('http://localhost:1337/')
      .then(response => response.json() )
      .then(pkmns => this.setState({ data: pkmns, displayAll: true }) );
  }

  async getOne(id) {
    const json = await fetch('http://localhost:1337/'+id)
                  .then(response=>response.json());
    this.setState({ data: json, displayAll: false });
  }

  componentWillMount() {
    if(this.props.pokeid!==false) {
      this.getOne(this.props.pokeid);
    }
    else {
      this.getAll();
    };
  }

  render() {
    return(
      <div className="content">
        <Pokemon data={this.state.data} displayAll={this.state.displayAll} />
      </div>
    );
  }
}

export default Pokedex;
