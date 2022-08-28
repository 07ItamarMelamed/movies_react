import React from 'react';

class EditMovie extends React.Component {

  state = {
      name: '',
      year: '', //transform to number on submit
      director: '',
      imageUrl: '',
  }
  
  handleChange = (e) => {
    this.setState((state) => {
        let target = e.target;
        state[target.name] = target.value;
        return state;
    })
  }
  
  render(){
    const { movieToEdit, editMovie, backFromEdit } = this.props
      return(
          <div>
            {!movieToEdit ? <h4>Add Movie</h4> : <h4>Edit Movie</h4>}
            <div className='container jumbotron'>
              <div className="row">
                <div className="col">
                  <label>Name</label>
                  <input className="form-control" onChange={this.handleChange} name='name' value={this.state.name}/>
                </div>
                <div className="col">
                  <label>Year</label>
                  <input className="form-control" onChange={this.handleChange} name='year' value={this.state.year}/>   
                </div>
                <div className="col">
                  <label>Director</label>
                  <input className="form-control" onChange={this.handleChange} name='director' value={this.state.director}/>   
                </div>
                <div className="col">
                  <label>Image URL</label>
                  <input className="form-control" onChange={this.handleChange} name='imageUrl' value={this.state.imageUrl}/>  
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <button type="button" className="btn btn-secondary" onClick={() => backFromEdit()}>Back</button>
                </div>
                <div className="col">
                  <button type="button" className="btn btn-success" onClick={() => editMovie(movieToEdit, this.state.name, this.state.year, this.state.director, this.state.imageUrl)}>Submit</button>
                </div>
              </div>
            </div>
          </div>
      );
  }
}

export {EditMovie};