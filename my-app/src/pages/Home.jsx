import React from 'react';
import {MovieList} from '../cmps/movieList.jsx';
import {EditMovie} from '../cmps/EditPreview.jsx';
import {list} from '../services/initialMovies.js';

class Home extends React.Component {

    state = {
        movies: list,
        isAddMode: false,
        movieToEdit: null
    }

    onSearch = () => {
        const currList = list;
        this.setState({
            movies: currList.filter(
                (movie) => 
                movie.name.toUpperCase().includes(String(document.querySelector('#search').value).toUpperCase()) === true
            )
        })
    }

    backFromEdit = () => {
        this.setState({
            isAddMode: false,
        })
    }

    onAddMovie = () => {
        this.setState({
            isAddMode: true,
        })
    }

    editMovie = (id, name, year, director, imageUrl) => {
        let currList = this.state.movies;
        const movie = {
            id: generateId(),
            name: name,
            year: year,
            director: director,
            imageUrl: imageUrl
        }
        if (!id) {
            //Add
            currList.concat(movie);
        } else {
            let changedMovie = currList.find((movie) => movie.id === id);
            currList[currList.findIndex(changedMovie)].name = name;
            currList[currList.findIndex(changedMovie)].year = year;
            currList[currList.findIndex(changedMovie)].director = director;
            currList[currList.findIndex(changedMovie)].imageUrl = imageUrl;
        }
        this.setState({
            movies: currList,
            isAddMode: false,
            movieToEdit: null
        });
    }

    onRemoveMovie = id => {
        //Remove
    }

    onEditMovie = id => {
        //Edit
    }

    render(){
        const { movies, isAddMode, movieToEdit } = this.state
        return (<div>
            <h1>Movies App</h1>
            {!movieToEdit && !isAddMode ?
                (<MovieList
                    onAddMovie={this.onAddMovie}
                    movies={movies}
                    onRemoveMovie={this.onRemoveMovie}
                    onEditMovie={this.onEditMovie}
                    onSearch={this.onSearch}
                />) :
                (<EditMovie 
                    movieToEdit={movieToEdit} 
                    editMovie={this.editMovie}
                    backFromEdit={this.backFromEdit}
                />)}
        </div>)
    };
}

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  const generateId = (limit = 20) => {
    const newId = '';
    const list = ['abcdefghijklmnopqrstuvwxyz_-?1234567890'];
    const chooseCase = Math.random();
    for (let i = 0; i < limit; i++) {
      let randIndex = getRandomInt(0, list.length-1);
      randIndex = chooseCase === 0 ? randIndex.toUpperCase() : randIndex.toLowerCase();
      newId.concat(randIndex);
    }
    return newId;
  }

export {Home};