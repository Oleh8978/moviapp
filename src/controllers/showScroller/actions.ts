import { appName } from "../../config/contants";
import {createAction } from "typesafe-actions";

import { IShowScroller } from "./models";

/* Actions */
export const widgetName = "SHOW_SCROLL";

export const setShowScroll = createAction(
    `${appName}/${widgetName}/SET_SHOW`
  )<IShowScroller>();