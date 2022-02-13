import React from 'react';
import { connect } from 'react-redux';

// components
import ProgressBar from '../progressBar';

// svg
import Like from '../../assets/svg/Like';
import BookMark from '../../assets/svg/Bookmark';
import Star from '../../assets/svg/Star';

// interfaces
import { IStore } from '../../controllers/storeModel';
import { ISingleMovieResponse } from '../../controllers/getSingleMovieReducer/models';

interface IProps {
  filmData: ISingleMovieResponse | null
}

const VoteSection: React.FC<IProps>  = (props) => {

  if (!props.filmData) {
    return <></>
  }

  return (
    <div className="vote-section">
      <ProgressBar 
        customClass='vote-progress'
        customTextClass='vote-percent'
        customPudding={33}
        size={54} 
        progress={Number(props.filmData?.vote_average * 10)} 
        strokeWidth={2} 
        circleOneStroke={'#359848'} 
        circleTwoStroke={'#50D86A'} 
      />
      <div className='vote-section-text'>
        {`User Score`}
      </div>
      <div className='vote-options'>
        <Like />
        <BookMark/>
        <Star />
      </div>
    </div>
  );
}

export default connect(
  (state: IStore) => ({
      filmData: state.singleMovie.data,
  }),
  {},
)(VoteSection);