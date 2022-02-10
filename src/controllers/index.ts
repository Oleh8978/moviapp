import { all } from "redux-saga/effects";
import { combineReducers, Reducer } from "redux";
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

// reducers
import { errorsReducer } from  './errorHandler';
import { loaderReducer } from "./loaderReducer";
import { historyReducer } from './historyReducer/index';
import { ageReducer } from "./ageReducer";
import { moviesReducer } from "./getMoviesReducer";
import { singleMovieReducer } from './getSingleMovieReducer';
import { menuSelectItemReducer } from './menuIemReducer';

// sagas 
import { moviesSagas } from './getMoviesReducer';
import { singleMovieSagas } from './getSingleMovieReducer'; 

// interfaces 
import { IStore } from "./storeModel";

export const rootSaga = function* () {
  yield all([
    moviesSagas(),
    singleMovieSagas()
  ]);
};

export const rootReducer = (history: History): Reducer =>
  combineReducers<IStore>({
    router: connectRouter(history),
    loader: loaderReducer,
    errors: errorsReducer,
    historyState: historyReducer,
    age: ageReducer,
    allMovies: moviesReducer,
    singleMovie: singleMovieReducer,
    activeMenuItem: menuSelectItemReducer,
  });
