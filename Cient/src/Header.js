import React, {Component} from 'react';

class Header extends Component {
  shouldComponentUpdate(nextProps,nextState) {
    if (this.props !== nextProps) {
      return true;
    }
    if (this.state !== nextState) {
      return true;
    }
    return false;
  }

  render() {
    return(
      <header>
        <img src="/logo.png" alt="logo"/>
      </header>
    );
  }
}

export default Header;
