import React, {Component} from 'react';

class Search extends Component {
  render() {
    return(
      <span className="search">
        <form action="/sendSearch.js">
          <input placeholder="Search for a pokemon..." type="text" name="pokesearch"  />
        </form>
      </span>
    );
  }
}

export default Search;
