import React, {Component} from 'react';
import Identifiers from './Identifiers';

class Pokemon extends Component {
  constructor(props) {
    super(props);

    this.getIdentifiers = this.getIdentifiers.bind(this);
  }

  getIdentifiers(data) {
    let result = []
    let identifiers = {};

    if (this.props.displayAll) {
      data.map( (pkmn)=>{
        identifiers = {
          ndex: pkmn.ndex,
          nom: pkmn.nom,
          type1: pkmn.type1,
          type2: pkmn.type2||null
        }
        result.push(identifiers);
        return identifiers;
      });
    } else {
        if (data[0]===undefined) {
          result.push({
            ndex: window.location.href.match(/\/[0-9]+/)[0].substr(1), nom: "???", attaques: [{niveau:"???",nom:"???",puissance:"???",précision:"???",pp:"???"}]
          })
          return result;
        } else {
          identifiers = data[0];
          result.push(identifiers);
        }
    }

    return result;
  }


  render() {
    return(
      <div className="pokemondatas">
        <Identifiers data={this.getIdentifiers(this.props.data)}/>
        <a className={"previously "+this.props.displayAll+""} href="/"><img alt="back" src="/bbutton.png"/></a>
      </div>
    );
  }
}

export default Pokemon;
