import React from 'react';
import history from '../../historyApi';

// components
import Image from '../imageOnError';
import ProgressBar from '../progressBar';

// svgs
import DescriptionChar from '../../assets/svg/DescriptionChar';

import { dateFormatter } from '../../utils/dateFormatter';

// interfaces
import { IMovieDataPreview } from '../../controllers/getMoviesReducer/models';

interface IProps {
    data: IMovieDataPreview
}

const FilmIem: React.FC<IProps>  = (props) => {
  return (
    <div 
      className="film-card"
      onClick={() => history.push(`/movie/${props.data.id}`)}
    >

      <div className='film-card__top'>
        <DescriptionChar />
        <Image uri={`https://www.themoviedb.org/t/p/w440_and_h660_face${props.data.poster_path}`} />
        <ProgressBar 
          size={35} 
          progress={Number(props.data.vote_average * 10)} 
          strokeWidth={2} 
          circleOneStroke={'#359848'} 
          circleTwoStroke={'#50D86A'} 
        />
      </div>
      <div className='film-card__bottom'>
        <span className='film-title'>{props.data.title}</span>
        <span className='film-date'>{dateFormatter(props.data.release_date)}</span>
      </div>
    </div>
  );
}

export default FilmIem;