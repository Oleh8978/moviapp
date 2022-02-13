import React from 'react';
import { connect } from 'react-redux';

// components
import VoteSection from '../voteSection';
import OverView from '../overView';
import CrewComponent from '../crewComponent';

// interfaces
import { IReleasesDates, ISingleMovieResponse } from '../../controllers/getSingleMovieReducer/models';
import { IStore } from '../../controllers/storeModel';

// utils
import { dateFromDateString } from '../../utils/dateFromDateString';
import { durationConverter } from '../../utils/durationConverter';

interface IProps {
    filmData: ISingleMovieResponse | null,
    releaseDate: IReleasesDates | null
}

const FilmHeader: React.FC<IProps>  = (props) => {
  return (
    <div className='filmHeader'>
        <div className='filmHeader-certification'>
            {props.releaseDate?.results[0].release_dates[0].certification}
        </div>
        <div className='filmHeader-title'>
            {`${props.filmData?.title} `}&nbsp;
            <div className='filmHeader-title__year'>{` (${String(props.filmData?.release_date).split('-')[0]})`}</div>
        </div>
        <div className='filmHeader-list'>
            {`${dateFromDateString(props.releaseDate?.results[0].release_dates[0].release_date)}`}
            {props.releaseDate?.results[0].iso_3166_1}
            <div className='filmHeader-point'/>
            {`${props.filmData?.genres.map(item => item.name).join(', ')}`}
            <div className='filmHeader-point'/>
            {durationConverter(props.filmData?.runtime)}
        </div>
        <VoteSection />
        <OverView />
        <CrewComponent />
    </div>
  );
}

export default connect(
    (state: IStore) => ({
        filmData: state.singleMovie.data,
        releaseDate: state.singleMovie.releaseDates
    }),
    {},
  )(FilmHeader);