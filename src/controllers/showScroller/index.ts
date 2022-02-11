import { createReducer, ActionType } from "typesafe-actions";

// Actions
import * as actions from "./actions";

import { IShowScroller } from "./models";

export type TypeScroller = ActionType<typeof actions>;

/* Reducer */
const initialState: IShowScroller = {
    show: false
};

export const showScrollReducer = createReducer<IShowScroller, TypeScroller>(
    initialState
)
  .handleAction(actions.setShowScroll, (state, { payload }) => ({
    show: payload.show
}))