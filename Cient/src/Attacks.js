import React, {Component} from 'react';

class Attacks extends Component {
  render() {
    return(
      <ul className="attackslist">
        <li>
          <ul>
            <li>Level</li>
            <li>Name</li>
            <li>Power</li>
            <li>Precis.</li>
            <li>PP</li>
          </ul>
        </li>
        {this.props.data[0].attaques.map( a => {
          return (
            <li key={this.props.data[0].ndex + a.nom}>
              <ul>
                {Object.keys(a).map( (key) => <li key={a.nom + key}>{a[key]}</li> ) }
              </ul>
            </li>
          );
        }) }
      </ul>
    );
  }
}

export default Attacks;
