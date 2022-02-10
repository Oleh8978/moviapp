import { appName } from "../../config/contants";
import { createAsyncAction } from "typesafe-actions";

import { IMoviesResponse, IPageDataRequest } from './models';

/* Actions */
export const widgetName = "GET_MOVIES_ACTIONS";

export const getMoviesAction = createAsyncAction(
  `${appName}/${widgetName}/GET_LIST_OF_MOVIES_REQUEST`,
  `${appName}/${widgetName}/GET_LIST_OF_MOVIES_SUCCESS`,
  `${appName}/${widgetName}/GET_LIST_OF_MOVIES_FAILED`
)<IPageDataRequest, IMoviesResponse, IMoviesResponse>();


