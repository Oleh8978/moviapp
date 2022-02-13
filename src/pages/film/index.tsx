import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';

// components
import Footer from '../../components/footer';
import Image from '../../components/imageOnError';
import FilmHeader from '../../components/filmHeadData';

// actions
import * as geMovieActions from '../../controllers/getSingleMovieReducer/actions';

// interfaces
import { RouteComponentProps } from "react-router-dom";
import { IStore } from '../../controllers/storeModel';
import { ISingleMovieResponse } from '../../controllers/getSingleMovieReducer/models';
import { IError } from '../../controllers/errorHandler/model';

interface RouteParams {
  id: string
}

interface IProps extends RouteComponentProps<RouteParams> {
  filmData: ISingleMovieResponse | null
  errors: IError[]
}

const Film: React.FC<IProps>  = (props) => {

  const dispatch = useDispatch();

  useEffect(() => {
    if (!props.filmData) {
      dispatch(geMovieActions.getMovieAction.request(Number(props.match.params.id)))
    }
  },[])

  if (!props.filmData) {
    return <></>
  }

  return (
    <div className="films-single">
      <div 
        className='films-single__top'
        style={{
          background: `url("https://www.themoviedb.org/t/p/w440_and_h660_face${props.filmData.backdrop_path}")`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        <div className='background-opacity'>
          <div className={'films-single__top-img-wrapper'}>
            <Image 
              customClass={'image-poster'}
              uri={`https://www.themoviedb.org/t/p/w440_and_h660_face${props.filmData.poster_path}`} 
            />
          </div>
          <div className='films-single__top-content-wrapper'>
            <FilmHeader />
          </div>
        </div>
      </div>
      <div className='films-single__bottom'>

      </div>
      <Footer />
    </div>
  );
}

export default connect(
  (state: IStore) => ({
      filmData: state.singleMovie.data,
      errors: state.errors.errors
  }),
  {},
)(Film);
