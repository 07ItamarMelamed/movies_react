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

    onSearch = e => {
        this.setState({
            movies: list.filter((movie) => movie.name.includes(e.target.value))
        })
    }

    onAddMovie = e => {
        this.setState({
            movies: list.filter((movie) => movie.name.includes(e.target.value))
        })
    }

    onRemoveMovie = e => {
        this.setState({
            movies: list.filter((movie) => movie.name.includes(e.target.value))
        })
    }

    onEditMovie = e => {
        this.setState({
            movies: list.filter((movie) => movie.name.includes(e.target.value))
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
                (<EditMovie movieToEdit={movieToEdit} />
                )}
        </div>)
    };
}

export {Home};