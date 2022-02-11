import React from 'react';

// interfaces
import { IMovieDataPreview } from '../../controllers/getMoviesReducer/models';

interface IProps {
    data: IMovieDataPreview
}

const FilmIem: React.FC<IProps>  = (props) => {
  return (
    <div className="film-card">
    </div>
  );
}

export default FilmIem;