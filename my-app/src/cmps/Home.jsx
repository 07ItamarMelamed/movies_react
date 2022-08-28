import {React} from 'react';
import {MovieList} from './movieList.jsx';
import {EditMovie} from './EditPreview.jsx';

class Home extends React.Component {

    state = {  };

    handleChange = (e) => {
      this.setState({})
    };

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