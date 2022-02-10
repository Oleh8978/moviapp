import { all } from "redux-saga/effects";
import { combineReducers, Reducer } from "redux";
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

// reducers
import { errorsReducer } from  './errorHandler';
import { loaderReducer } from "./loaderReducer";
import { historyReducer } from './historyReducer/index';

// interfaces 
import { IStore } from "./storeModel";

export const rootSaga = function* () {
  yield all([

  ]);
};

export const rootReducer = (history: History): Reducer =>
  combineReducers<IStore>({
    router: connectRouter(history),
    loader: loaderReducer,
    errors: errorsReducer,
    historyState: historyReducer,
  });
