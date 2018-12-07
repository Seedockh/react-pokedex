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
    if (this.props.data!==null) {
      if (this.props.data.nom==="???") {
        this.setState({ unknown: "unknown" })
      }
      this.setState({
        url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/"+this.props.data.ndex+".png" });
    } else if (this.props.next!==null) {
      this.setState({
        url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/"+this.props.next.ndex+".png" });
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
