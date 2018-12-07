import React, {Component} from 'react';

class Picture extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      url: null,
      unknown: " ",
    });
  }

  componentDidMount() {
      if (this.props.data.nom==="???") {
        if (this.props.next===undefined) {
          this.setState({ unknown: "unknown", url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/"+this.props.data.ndex+".png" })
        } else {
          this.setState({ url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/"+this.props.next+".png" })
        }
      } else if (this.props.next!==undefined) {
        this.setState({
        url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/"+this.props.next+".png" });
      } else {
        this.setState({
          url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/"+this.props.data.ndex+".png" });
      }
  }

  render() {
    return(
      <span className="pokepicture">
        <img className={""+this.state.unknown+""} src={this.state.url} alt="pokepicture" />
      </span>
    );
  }
}

export default Picture;
