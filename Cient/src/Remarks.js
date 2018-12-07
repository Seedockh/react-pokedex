import React, {Component} from 'react';

class Remarks extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      rmrk1: null,
      rmrk2: null,
    });
  }

  componentDidMount() {
    const rmqKeys=[];
    for (let key in this.props.data) {
      if (key.match(/^rmq-[a-z]*$/)) {
        rmqKeys.push(key.match(/^rmq-[a-z]*$/));
      }
    }
    if (rmqKeys.length===2) {
      this.setState({
        rmrk1:this.props.data[rmqKeys[0]],
        rmrk2:this.props.data[rmqKeys[1]]
      })
    } else if (rmqKeys.length===1) {
      this.setState({ rmrk1:this.props.data[rmqKeys[0]] })
    } else {
      this.setState({rmrk1:"No data found."})
    }
  }

  render() {
    return(
      <span className="pokeremark">
        <h6>Remarks :</h6>
        <p>{this.state.rmrk1}</p>
        <p>{this.state.rmrk2}</p>
      </span>
    );
  }
}

export default Remarks;
