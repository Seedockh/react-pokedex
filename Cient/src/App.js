import React, { Component } from 'react';
import Pokedex from './Pokedex';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  render() {
    let pokeid;
    if(window.location.href.match(/\/[0-9]+/)) {
      pokeid = window.location.href.match(/\/[0-9]+/)[0].substr(1);
    } else { pokeid = false; }
    return (
      <div className="container">
        <Header />
        <Pokedex pokeid={pokeid}/>
        <Footer />
      </div>
    )
  }
}

export default App;
