import { all, put, takeEvery } from "redux-saga/effects";

//APIs
import { GeMovieAPI } from "../transport/getSingleMovie.api";

// actions 
import { getMovieAction } from '../actions';

// loader handler
import * as LoaderActions from '../../loaderReducer/action';

// errors handlers 
import * as errorHandlers from '../../errorHandler/action';

import { ISingleMovieResponse } from '../models';

export function*  moviesSaga({
        payload,
}: ReturnType<typeof getMovieAction.request>) {

  yield put(LoaderActions.setLoader({loader: true}));

  try {
    const res: ISingleMovieResponse = yield (GeMovieAPI.getMovie(payload));
    
    if (res) {
        yield put(getMovieAction.success(res));
        yield put(LoaderActions.setLoader({loader: false}));
    }

  } catch (error: any) {

    yield put(errorHandlers.setNewError({
      type: 'Failure to get movie',
      msg: String(error.status_message),
      id: Math.random(),
    }))

    yield put(LoaderActions.setLoader({loader: false}));

  }
}

export function* getSingleMovieSagas() {
  yield all([
    takeEvery(getMovieAction.request, moviesSaga),
  ]);
}
