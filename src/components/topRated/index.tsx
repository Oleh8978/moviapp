import React, { useRef } from 'react';
import { connect } from 'react-redux';

// components
import Image from '../imageOnError';
import LeftScroll from '../../assets/svg/scrollLeft';

// interfaces
import { IStore } from '../../controllers/storeModel';
import { ICast } from '../../controllers/getSingleMovieReducer/models';

interface IProps {
  casts: ICast[] | undefined
}

const TopRated: React.FC<IProps>  = (props) => {

  if (!props.casts) {
    return <></>
  }

  return (
    <>
    <div className="top-rated">
      <div className="top-rated-wrapper">
        <span className="top-rated-casts">Top billed cast</span>
          <div className="top-rated-actors">
            {props.casts.map(item => {
              return (
                <div 
                  className='cast-card'
                  key={item.id}
                >
                  <Image customClass='cast-img' uri={`https://www.themoviedb.org/t/p/w440_and_h660_face${item.profile_path}`}/>
                  <div className='cast-card-text-wrapper'>
                    <span className='cast-card-text-wrapper__top'>
                      {item.name}
                    </span>
                    <span className='cast-card-text-wrapper__bottom'>
                      {item.character}
                    </span>
                  </div>
                </div>
              )
            })}
          <LeftScroll />
        </div>
      </div>
    </div>
    </>
  );
}

export default connect(
    (state: IStore) => ({
        casts: state.singleMovie.credits?.cast,
    }),
    {},
  )(TopRated);