import React from 'react';

class SearchBar extends React.Component {
    state = { inputValue: '' }
    handleChange = e => {
        this.setState({inputValue: e.target.value})
    }
    render(){
        const { onSearch } = this.props
        return(
          <div className='container jumbotron'>
            <div className="row">
              <div className="col">
                <SearchInput handleChange={this.handleChange} inputValue={this.state.inputValue}/>     
              </div>
            </div>
          </div>
        );
    }
}

const SearchInput = ({inputValue, handleChange}) => (
    <div>
      <label>Search Movie</label>
      <input className="form-control" onChange={handleChange} value={inputValue}/>
    </div>
)

export {SearchBar};