import React, {Component} from 'react';

class Infos extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      data: null,
    });
  }

  componentWillMount() {
    let pkm = {}
    const useful = ['espece','taille','poids','couleur','oeufpas','effortval','groupoeuf1','groupoeuf2','capspe1','capspe2','capspe2-reve'];
    Object.keys(this.props.data).map( k => {
      if (useful.indexOf(k)!==-1) {
        pkm[k] = this.props.data[k]
      }
    })
    this.setState({
      data: pkm,
    })
  }

  render() {
    return(
      <div className="infoscompl">
        <ul>
          {Object.keys(this.state.data).map( key => {
              return <li key={key}>{key} : {this.state.data[key]}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default Infos;
