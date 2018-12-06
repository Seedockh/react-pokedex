import React, {Component} from 'react';

class Type extends Component {
  constructor(props) {
    super(props);
    this.formatType = this.formatType.bind(this);
  }

  formatType(type) {
    let res = '';
    switch (type) {
      case 'Plante' :
        res = <span className="type plant">Plant</span>; break;
      case 'Poison' :
        res = <span className="type poison">Poison</span>; break;
      case 'Feu' :
        res = <span className="type fire">Fire</span>; break;
      case 'Vol' :
        res = <span className="type flying">Flying</span>; break;
      case 'Eau' :
        res = <span className="type water">Water</span>; break;
      case 'Insecte' :
        res = <span className="type bug">Bug</span>; break;
      case 'Normal' :
        res = <span className="type normal">Normal</span>; break;
      case 'Électrique' :
        res = <span className="type electric">Electric</span>; break;
      case 'Sol' :
        res = <span className="type ground">Ground</span>; break;
      case 'Combat' :
        res = <span className="type fighting">Fighting</span>; break;
      case 'Psy' :
        res = <span className="type psychic">Psychic</span>; break;
      case 'Roche' :
        res = <span className="type rock">Rock</span>; break;
      case 'Acier' :
        res = <span className="type steel">Steel</span>; break;
      case 'Glace' :
        res = <span className="type ice">Ice</span>; break;
      case 'Spectre' :
        res = <span className="type ghost">Ghost</span>; break;
      case 'Dragon' :
        res = <span className="type dragon">Dragon</span>; break;
      default : res = ''; break;
    }
    return res;
  }

  render() {
    return (
      <span className="types">
      {this.formatType(this.props.type1)}
      {this.formatType(this.props.type2)}
    </span>
    );
  }

}

export default Type;
