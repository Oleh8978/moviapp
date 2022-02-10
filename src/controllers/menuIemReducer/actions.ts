import { appName } from "../../config/contants";
import {createAction } from "typesafe-actions";

import { ISelectedItem } from "./models";

/* Actions */
export const widgetName = "MENU_IEM_SELECT";

export const setMenuItem = createAction(
    `${appName}/${widgetName}/ACTION`
  )<ISelectedItem>();