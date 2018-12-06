import React, {Component} from 'react';
import Picture from './Picture';
import Type from './Type';

class Identifiers extends Component {
  constructor(props){
    super(props);
    this.displayIdentifiers = this.displayIdentifiers.bind(this);
    this.getPicture = this.getPicture.bind(this);
  }

  displayIdentifiers(data) {
    return data.map( p => {
      return <a href={"/"+p.id} className="collection-item" key={p.id}><table><tbody><tr><td className="identifiersleft"><span className="pokeid">{p.id}</span> <Picture data={this.getPicture(p)}/> ::: {p.name} </td><td><Type type1={p.type1} type2={p.type2} /></td></tr></tbody></table></a>
    })
  }

  getPicture(data) {
    return {
      ndex: data.id,
      url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/"+data.id+".png"
    }
  }

  render() {
    return(
      <div className="identifiers collection">
        {this.displayIdentifiers(this.props.data)}
      </div>
    );
  }
}

export default Identifiers;
