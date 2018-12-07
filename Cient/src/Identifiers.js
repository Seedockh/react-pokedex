import React, {Component} from 'react';
import Picture from './Picture';
import Type from './Type';
import Infos from './Infos';
import Attacks from './Attacks';
import Evolution from './Evolution';

class Identifiers extends Component {
  constructor(props){
    super(props);
    this.state = ({
      previous: null,
      next: null,
    })

    this.displayIdentifiers = this.displayIdentifiers.bind(this);
    this.switchPokemon = this.switchPokemon.bind(this);
  }

  switchPokemon(increment,ndex) {
    ndex = parseInt(ndex);
    if (increment) {
      ndex = (ndex+1 > 151)  ? 1 : ndex+1;
    } else {
      ndex = (ndex-1 < 1) ? 151 : ndex-1;
    }
    if (ndex<10) { return ndex = '00'+ndex; }
    else if (ndex<100){ return ndex = '0'+ndex; }
    else { return ndex };
  }

  componentDidUpdate() {
    if (this.props.data[0]!==undefined) {
      this.setState({
        previous: this.switchPokemon(false,this.props.data[0].ndex),
        next: this.switchPokemon(true,this.props.data[0].ndex),
      });
    }
  }

  shouldComponentUpdate(nextProps,nextState) {
    if (this.props.data !== nextProps.data) {
      return true;
    }
    if ((this.state.previous !== nextState.previous) || (this.state.next !== nextState.next)) {
      return true;
    }
    return false;
  }

  displayIdentifiers(isSolo) {
    if (isSolo===1) {
      let pkm = this.props.data[0];
      return (
        <div className="selectedPokemon">
          <div className="poketitles">
            <h5>{pkm.ndex}. {pkm.nom}</h5><Type type1={pkm.type1} type2={pkm.type2} />
          </div>
          <div className="imgprofile">
            <Picture data={pkm}/>
          </div>
          <div className="nextbutton"><a href={"/"+this.state.next}><img src="/next.png" alt="next"/></a></div>
          <div className="backbutton"><a href={"/"+this.state.previous}><img src="/back.png" alt="back"/></a></div>
          <Infos data={pkm}/>
          <Evolution data=""/>
          <div className="attaques">
            <p>Attacks</p>
            <Attacks data={this.props.data}/>
          </div>
        </div>
      );
    } else {
      return (
        <div className="identifiers collection">
          {this.props.data.map( p => {
            return (
              <a href={"/"+p.ndex} className="collection-item" key={p.ndex}>
                <table>
                  <tbody><tr>
                    <td className="identifiersleft">
                      <span className="pokeid">{p.ndex}</span>
                      <Picture data={p}/> ::: {p.nom}
                    </td><td>
                      <Type type1={p.type1} type2={p.type2} />
                    </td>
                  </tr></tbody>
                </table>
              </a>
              )
            })
          }
        </div>
      );
    }
  }

  render() {
    return(
      <div className="parentidentifiers">{this.displayIdentifiers(this.props.data.length)}</div>
    );
  }
}

export default Identifiers;
