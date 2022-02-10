import { createReducer, ActionType } from "typesafe-actions";
import { all } from "redux-saga/effects";

// sagas
import { getMoviesListSagas } from './sagas';

// Actions
import * as actions from "./actions";

// Interfaces
import { IMoviesResponse } from "./models";

export type MoviesType = ActionType<typeof actions>;

export const moviesSagas = function* () {
    yield all([
        getMoviesListSagas()
    ]);
  };

/* Reducer */
const initialState: IMoviesResponse = {
    page: 1,
    results: []
};

export const moviesReducer = createReducer<IMoviesResponse, MoviesType>(
  initialState
)
  .handleAction(
    actions.getMoviesAction.success,
    (state: IMoviesResponse, { payload }): IMoviesResponse => ({
      ...state,
      page: payload.page,
      results: [...state.results.concat(payload.results)]
    })
  );
  