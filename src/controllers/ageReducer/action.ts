import { appName } from "../../config/contants";
import {createAction } from "typesafe-actions";

import { IAge } from "./models";

/* Actions */
export const widgetName = "AGE_HANDLER";

export const setNewAge = createAction(
    `${appName}/${widgetName}/SET_AGE`
  )<IAge>();
