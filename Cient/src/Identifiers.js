import React, {Component} from 'react';
import Picture from './Picture';
import Type from './Type';
import Infos from './Infos';
import Attacks from './Attacks';
import Remarks from './Remarks';
import SearchInput from './SearchInput';

class Identifiers extends Component {
  constructor(props){
    super(props);
    this.state = ({
      previous: this.switchPokemon(false,this.props.data[0].ndex),
      next: this.switchPokemon(true,this.props.data[0].ndex),
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
    return ndex;
  }

  componentWillUpdate() {
      this.setState({
        previous: this.switchPokemon(false,this.props.data[0].ndex),
        next: this.switchPokemon(true,this.props.data[0].ndex),
      });
  }

  displayIdentifiers(isSolo) {
    const rmqdefault = {}
    rmqdefault['rmq-default'] = 'Logged in as ... Sacha.';

    if (isSolo===1) {
      let pkm = this.props.data[0];
      return (
        <div className="selectedPokemon">
          <div className="nextpokepic">
            <Picture data={pkm} next={this.state.next} />
          </div>
          <div className="poketitles">
            <h5>{pkm.ndex}. {pkm.nom}</h5><Type type1={pkm.type1} type2={pkm.type2} />
          </div>
          <div className="imgprofile">
            <Picture data={pkm}/>
          </div>
          <div className="nextbutton"><a href={"/"+this.state.next}><img src="/next.png" alt="next"/></a></div>
          <div className="backbutton"><a href={"/"+this.state.previous}><img src="/back.png" alt="back"/></a></div>
          <Remarks data={pkm}/>
          <Infos data={pkm}/>
          <div className="attaques">
            <p>Attacks</p>
            <Attacks data={this.props.data}/>
          </div>
        </div>
      );
    } else {
      return (
      <div className="collectionwrapper">
        <div className="imglistdefault">
          <img src="/unknown.png" alt="default" />
        </div>
        <Remarks data={rmqdefault}/>
        <SearchInput data={this.props.data}/>
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
