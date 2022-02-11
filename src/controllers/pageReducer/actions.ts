import { appName } from "../../config/contants";
import {createAction } from "typesafe-actions";

import { IPage } from "./models";

/* Actions */
export const widgetName = "PAGE_SETTER";

export const setPage = createAction(
    `${appName}/${widgetName}/SET_PAGE`
  )<IPage>();