import React, {Component} from 'react';

class Footer extends Component {

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
      <footer>
        <textarea id="typingText" readOnly></textarea>
        {/*<div className="lokhlasstop"></div>
        <div className="lokhlassbot"></div>*/}
      </footer>
    );
  }

}

export default Footer;
