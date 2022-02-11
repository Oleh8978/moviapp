import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';

// components
import FilmIem from '../filmItem';
import LoadMore from '../loadMore';

// actions
import * as actions from '../../controllers/getMoviesReducer/actions';

// interfaces 
import { IStore } from '../../controllers/storeModel';
import { IMovieDataPreview } from '../../controllers/getMoviesReducer/models';
import { IError } from '../../controllers/errorHandler/model';

interface IProps {
    allFilms: IMovieDataPreview[],
    page: number,
    pageSelected: number,
    age: number,
    errors: IError[]
}

const FilmsWrapper: React.FC<IProps>  = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        if (props.errors.length === 0 && props.allFilms.length === 0) {
            dispatch(actions.getMoviesAction.request({page: props.pageSelected, age: props.age}))
        }
    }, [props.pageSelected, props.allFilms.length])

  return (
    <div className="films-wrapper">
        <span className='films-wrapper-text'>Popular Movies</span>
        <div className='movies-list'>
            {props.allFilms?.map(item => {
                return <FilmIem 
                            key={item.id} 
                            data={item}
                        />
            })}
        </div>
        <LoadMore />
    </div>
  );
}

export default connect(
    (state: IStore) => ({
      allFilms: state.allMovies.results,
      page: state.allMovies.page,
      pageSelected: state.page.page,
      age: state.age.age,
      errors: state.errors.errors
    }),
    {},
  )(FilmsWrapper);