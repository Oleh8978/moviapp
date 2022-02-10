import { appName } from "../../config/contants";
import { createAsyncAction} from "typesafe-actions";

import { ISingleMovieResponse } from './models';

/* Actions */
export const widgetName = "GET_MOVIE_ACTIONS";

export const getMovieAction = createAsyncAction(
  `${appName}/${widgetName}/GET_MOVIE_REQUEST`,
  `${appName}/${widgetName}/GET_MOVIE_SUCCESS`,
  `${appName}/${widgetName}/GET_MOVIE_FAILED`
)<number, ISingleMovieResponse, ISingleMovieResponse>();


