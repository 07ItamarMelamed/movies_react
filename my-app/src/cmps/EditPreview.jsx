import React from 'react';

class EditMovie extends React.Component {

    state = {
        name: '',
        year: '', //transform to number on submit
        director: '',
        imageUrl: '',
    }
    
    handleChange = (e) => {
        // TODO - write this function that will handle the change of the input value and change the state on each typing.
        this.setState({
            name: e.target.value,
            year: e.target.value,
            director: e.target.value,
            imageUrl: e.target.value
        })
    }     

    render(){
        return(
            <div className='container jumbotron'>
              <div className="row">
                <div className="col">
                  <NameInput handleChange={this.handleChange} name={this.state.name}/>
                </div>
                <div className="col">
                  <YearInput handleChange={this.handleChange} year={this.state.year}/>     
                </div>
                <div className="col">
                  <DirectorInput handleChange={this.handleChange} director={this.state.director}/>     
                </div>
                <div className="col">
                  <ImageInput handleChange={this.handleChange} image={this.state.imageUrl}/>     
                </div>
              </div>
            </div>
        );
    }
}

const NameInput = ({name, handleChange}) => (
    <div>
      <label>Name</label>
      <input className="form-control" onChange={handleChange} value={name}/>
    </div>
)
  
    
  
const YearInput = ({year, handleChange}) => (
    <div>
      <label>Year</label>
      <input className="form-control" onChange={handleChange} value={year}/>
    </div>
)

const DirectorInput = ({director, handleChange}) => (
    <div>
      <label>Director</label>
      <input className="form-control" onChange={handleChange} value={director}/>
    </div>
)

const ImageInput = ({image, handleChange}) => (
    <div>
      <label>Image URL</label>
      <input className="form-control" onChange={handleChange} value={image}/>
    </div>
)

export {EditMovie};