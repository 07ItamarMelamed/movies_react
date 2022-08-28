import React from 'react';
import { MoviePreview } from './moviePreview.jsx';
import {SearchBar} from './SearchBar.jsx';

class MovieList extends React.Component {

    render(){
        const { onSearch, onAddMovie, movies, onEditMovie, onRemoveMovie } = this.props
        return (<section>
            <SearchBar onSearch={onSearch} />
            <button type="button" className="btn btn-success" onClick={onAddMovie}>+ Add Movie</button>
            <ul>
                
                {
                movies.map((movie) =>
                <MoviePreview
                  key={movie.id}
                  id={movie.id}
                  name={movie.name}
                  year={movie.year}
                  director={movie.director}
                  imageUrl={movie.imageUrl}
                  onEdit={onEditMovie}
                  onRemove={onRemoveMovie}
                  />
                )
                
                /* TODO: Map the movies and render MoviePreview,
                MoviePreview should contain edit & delete buttons.
                Pass the onEditMovie and onRemoveMovie callbacks as    .           props to the MoviePreview component. */
                }
            </ul>
        </section>)
    }
}

export {MovieList};