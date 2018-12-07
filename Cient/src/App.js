import React, { Component } from 'react';
import Pokedex from './Pokedex';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      pokeid: false,
    })
  }

  componentWillMount() {
    if(window.location.href.match(/\/[0-9]+/)) {
      this.setState({
        pokeid : window.location.href.match(/\/[0-9]+/)[0].substr(1),
      });
    } else {
      this.setState({
        pokeid : false,
      });
    }
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Pokedex pokeid={this.state.pokeid}/>
        <Footer />
      </div>
    )
  }
}

export default App;
