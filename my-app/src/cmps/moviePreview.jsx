import React from 'react';

class MoviePreview extends React.Component {
    render(){
        const { id, name, year, director, imageUrl, onEdit, onRemove } = this.props
        return (<section>
            <div className="card mb-3 CardImage">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={imageUrl} className="img-fluid rounded-start CardImage" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h1 className="card-title BlackText">{name}</h1>
                            <h5 className="card-text BlackText">{director}</h5>
                            <p className="card-text"><small className="text-muted">{year}</small></p>
                            <button type="button" className="btn btn-warning" onClick={() => onEdit(id)}>✏️</button>
                            <button type="button" className="btn btn-danger" onClick={() => onRemove(id)}>🗑</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>)
    }
}

export {MoviePreview};