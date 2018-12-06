import React, {Component} from 'react';

class Picture extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <span className="pokepicture">
        <img src={""+this.props.data.url+""} alt={""+this.props.data.ndex+""} />
      </span>
    );
  }
}

export default Picture;
