import React from 'react';
import { connect } from 'react-redux';

// interfaces
import { IStore } from '../../controllers/storeModel';
import { ISingleMovieResponse } from '../../controllers/getSingleMovieReducer/models';

interface IProps {
  filmData: ISingleMovieResponse | null
}

const OverView: React.FC<IProps>  = (props) => {

  if (!props.filmData) {
    return <></>
  }

  return (
    <div className="overview">
      <span className='overview__top'>
        Overview
      </span>
      <span className='overview__bottom'>
        {props.filmData.overview}
      </span>
    </div>
  );
}

export default connect(
  (state: IStore) => ({
      filmData: state.singleMovie.data,
  }),
  {},
)(OverView);