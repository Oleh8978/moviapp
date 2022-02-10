import { all } from "redux-saga/effects";
import { combineReducers, Reducer } from "redux";

import { errorsReducer } from  './errorHandler';

// interfaces 
import { IStore } from "./storeModel";

export const rootSaga = function* () {
  yield all([

  ]);
};

export const rootReducer = (): Reducer =>
  combineReducers<IStore>({
    errors: errorsReducer,
  });
