import React,{Component} from 'react';
import Picture from './Picture';
import Type from './Type';

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      search: "",
      data: this.props.data,
    });
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(search) {
    let result = [];
    if(search.length===0) {
      result = this.props.data;
    } else {
      if (/[(,),.,*,[,\],+,!,?]/.test(search)) {  //Security check
        console.log('Bad request : '+search);
        this.setState({ data: [] });
        return false;
      } else {
        this.props.data.map( p => (p.nom.toLowerCase().match(search.toLowerCase())) ? result.push(p) : p );
      }
    }
    this.setState({ data: result });
  }

  render() {
      return (
      <div className="contentdisplay">
        <div className="search">
          <input placeholder="Search for a pokemon..." type="text" name="pokesearch" onChange={(e) => this.onSearch(e.target.value)} autoComplete="off" autoCorrect="off"/>
          <span className="resultfound">{this.state.data.length} result(s) found.</span>
        </div>
        <div className="identifiers collection">
          {this.state.data.map( p => {
            return (
              <a href={"/"+p.ndex} className="collection-item" key={p.ndex}>
                <table>
                  <tbody><tr>
                    <td className="identifiersleft">
                      <span className="pokeid">{p.ndex}</span>
                      <Picture data={p} isThumb={false}/> ::: {p.nom}
                    </td><td>
                      <Type type1={p.type1} type2={p.type2} />
                    </td>
                  </tr></tbody>
                </table>
              </a>
              )
            })
          }
        </div>
      </div>
      );
  }

}

export default SearchInput;
