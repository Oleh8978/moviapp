import { appName } from "../../config/contants";
import { createAsyncAction} from "typesafe-actions";

import { ICredit, IReleasesDates, ISingleMovieResponse } from './models';

/* Actions */
export const widgetName = "GET_MOVIE_ACTIONS";

export const getMovieAction = createAsyncAction(
  `${appName}/${widgetName}/GET_MOVIE_REQUEST`,
  `${appName}/${widgetName}/GET_MOVIE_SUCCESS`,
  `${appName}/${widgetName}/GET_MOVIE_FAILED`
)<number, ISingleMovieResponse | null, ISingleMovieResponse>();

export const getCreditsAction = createAsyncAction(
  `${appName}/${widgetName}/GET_CREDIT_REQUEST`,
  `${appName}/${widgetName}/GET_CREDIT_SUCCESS`,
  `${appName}/${widgetName}/GET_CREDIT_FAILED`
)<number, ICredit | null, ICredit>();

export const getReleaseDates = createAsyncAction(
  `${appName}/${widgetName}/GET_RELEASE_DATE_REQUEST`,
  `${appName}/${widgetName}/GET_RELEASE_DATE_SUCCESS`,
  `${appName}/${widgetName}/GET_RELEASE_DATE_FAILED`
)<number, IReleasesDates | null, IReleasesDates>();


