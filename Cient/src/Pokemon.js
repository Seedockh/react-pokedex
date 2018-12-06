import React, {Component} from 'react';
import Identifiers from './Identifiers';
import Infos from './Infos';
import Attacks from './Attacks';
import Evolution from './Evolution';

class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.getIdentifiers = this.getIdentifiers.bind(this);
    this.getInfos = this.getInfos.bind(this);
    this.getAttacks = this.getAttacks.bind(this);
    this.getEvolution = this.getEvolution.bind(this);
  }

  getIdentifiers(data) {
    let result = []
    let identifiers = {};
    data.map( (pkmn)=>{
      identifiers = {
        id: pkmn.ndex,
        name: pkmn.nom,
        type1: pkmn.type1,
        type2: pkmn.type2||null
      }
      result.push(identifiers);
      return identifiers;
    });
    return result;
  }

  getInfos(data) {

  }

  getAttacks(data) {

  }

  getEvolution(data) {

  }

  render() {
    if(!this.props.displayAll) {
      this.getInfos(this.props.data);
      this.getAttacks(this.props.data.attacks);
      this.getEvolution(this.props.data);
    }

    return(
       <div className="pokemondatas">
      {/* { this.props.data.map( (pkmn)=> {
        return (
          <p key={pkmn.ndex}>
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
          </p>
        )})
      } */}
        <Identifiers data={this.getIdentifiers(this.props.data)}/>
        <Infos data=""/>
        <Attacks data=""/>
        <Evolution data=""/>
      </div>
    );
  }
}

export default Pokemon;
