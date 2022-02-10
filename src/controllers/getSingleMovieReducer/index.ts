import { createReducer, ActionType } from "typesafe-actions";
import { all } from "redux-saga/effects";

// sagas
import { getSingleMovieSagas } from './sagas';

// Actions
import * as actions from "./actions";

// Interfaces
import { ISingleMovieState } from "./models";

export type MovieType = ActionType<typeof actions>;

export const singleMovieSagas = function* () {
    yield all([
        getSingleMovieSagas()
    ]);
  };

/* Reducer */
const initialState: ISingleMovieState = {
    data: {}
};

export const singleMovieReducer = createReducer<ISingleMovieState, MovieType>(
  initialState
)
  .handleAction(
    actions.getMovieAction.success,
    (state: ISingleMovieState, { payload }): ISingleMovieState => ({
      ...state,
      ...payload
    })
  );
  