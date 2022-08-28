import React from 'react';

class MoviePreview extends React.Component {
    render(){
        const { id, name, year, director, imageUrl, onEdit, onRemove } = this.props
        return (<section>
            <p>{id}</p>
            <p>{name}</p>
            <p>{year}</p>
            <p>{director}</p>
            <button className="button-warning" onClick={onEdit}>Edit</button>
            <button className="button-danger" onClick={onRemove}>Delete</button>
            <img src={imageUrl} alt="..."/>
        </section>)
    }
}

export {MoviePreview};