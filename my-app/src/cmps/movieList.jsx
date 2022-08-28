import {React} from 'react';

class MovieList extends React.Component {

    state = {  };

    handleChange = (e) => {
      this.setState({})
    };

    render(){
        const { onSearch, onAddMovie, movies, onEditMovie, onRemoveMovie } = this.props
        return (<section>
            <SearchBar onSearch={onSearch} />
            <button onClick={onAddMovie}>+ Add Movie</button>
            <ul>
                {/* TODO: Map the movies and render MoviePreview,
                MoviePreview should contain edit & delete buttons.
                Pass the onEditMovie and onRemoveMovie callbacks as    .           props to the MoviePreview component. */}
            </ul>
        </section>)
    }
}

export {MovieList};