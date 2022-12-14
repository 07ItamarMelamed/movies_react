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
            movieToEdit: null,
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
            year: +year,
            director: director,
            imageUrl: imageUrl
        }
        if (!id) {
            //Add
            console.log(movie.id);
            currList.push(movie);
        } else {
            let changedMovie = currList.find((movie) => movie.id === id);
            if (name) {
                changedMovie.name = name;
            }
            if (year) {
                changedMovie.year = year;
            }
            if (director) {
                changedMovie.director = director;
            }
            if (imageUrl) {
                changedMovie.imageUrl = imageUrl;
            }
        }
        this.setState({
            movies: currList,
            isAddMode: false,
            movieToEdit: null
        });
    }

    onRemoveMovie = (id) => {
        let currList = this.state.movies;
        let listWithoutMovie = currList.filter((movie) => movie.id !== id);
        this.setState({
            movies: listWithoutMovie,
            isAddMode: false,
            movieToEdit: null
        });
    }

    onEditMovie = (id) => {
        this.setState({
            isAddMode: true,
            movieToEdit: id,
        })
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
    let newId = '';
    const list = 'abcdefghijklmnopqrstuvwxyz_-?1234567890';
    const chooseCase = Math.random();
    for (let i = 0; i < limit; i++) {
      const randIndex = getRandomInt(0, list.length-1);
      const randomSymbol = list.charAt(randIndex);
      const finalizedSymbol = chooseCase === 0 ? randomSymbol.toUpperCase() : randomSymbol.toLowerCase();
      newId = newId.concat(finalizedSymbol);
    }
    return newId;
  }

export {Home};