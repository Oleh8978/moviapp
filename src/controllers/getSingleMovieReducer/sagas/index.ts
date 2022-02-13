import { all, put, takeEvery } from "redux-saga/effects";

//APIs
import { GetMovieAPI } from "../transport/getSingleMovie.api";

// actions 
import { getMovieAction, getCreditsAction, getReleaseDates } from '../actions';

// loader handler
import * as LoaderActions from '../../loaderReducer/action';

// errors handlers 
import * as errorHandlers from '../../errorHandler/action';

import { ICredit, IReleasesDates, ISingleMovieResponse } from '../models';

export function*  moviesSaga({
        payload,
}: ReturnType<typeof getMovieAction.request>) {

  yield put(LoaderActions.setLoader({loader: true}));

  try {
    const res: ISingleMovieResponse = yield (GetMovieAPI.getMovie(payload));
    const credits: ICredit = yield (GetMovieAPI.getCredits(payload));
    const releases: IReleasesDates = yield (GetMovieAPI.getReleasesDates(payload));

    if (res && credits && releases) {
        yield put(getMovieAction.success(res));
        yield put(getCreditsAction.success(credits));
        yield put(getReleaseDates.success({...releases, results: releases.results.filter(item => item.iso_3166_1 === 'US')}));
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
