import React from 'react';

class SearchBar extends React.Component {
    state = { inputValue: '' }
    handleChange = e => {
        this.setState({inputValue: e.target.value});
        this.props.onSearch();
    }
    render(){
        return(
          <div className='container jumbotron'>
            <div className="row">
              <div className="col">
                <label>Search Movie</label>
                <input id="search" className="form-control" onChange={this.handleChange} value={this.state.inputValue}/>  
              </div>
            </div>
          </div>
        );
    }
}

export {SearchBar};