import { all, put, takeEvery } from "redux-saga/effects";

//APIs
import { GeMoviesAPI } from "../transport/getMovies.api";

// actions 
import { getMoviesAction} from '../actions';

// loader handler
import * as LoaderActions from '../../loaderReducer/action';

// errors handlers 
import * as errorHandlers from '../../errorHandler/action';

import { IMoviesResponse } from '../models';

export function*  moviesSaga({
        payload,
}: ReturnType<typeof getMoviesAction.request>) {

  yield put(LoaderActions.setLoader({loader: true}));

  try {
    const res: IMoviesResponse = yield (GeMoviesAPI.getMoviesList(payload));
    
    if (res) {
        yield put(getMoviesAction.success(res));
        yield put(LoaderActions.setLoader({loader: false}));
    }

  } catch (error: any) {

    yield put(errorHandlers.setNewError({
      type: 'Failure to get movies',
      msg: String(error.status_message),
      id: Math.random(),
    }))

    yield put(LoaderActions.setLoader({loader: false}));

  }
}

export function* getMoviesListSagas() {
  yield all([
    takeEvery(getMoviesAction.request, moviesSaga),
  ]);
}
