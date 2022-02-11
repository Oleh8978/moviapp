import { createReducer, ActionType } from "typesafe-actions";

// Actions
import * as actions from "./actions";

import { IPage } from "./models";

export type TypeAPageReducer = ActionType<typeof actions>;

/* Reducer */
const initialState: IPage = {
    page: 1
};

export const pageReducer = createReducer<IPage, TypeAPageReducer>(
    initialState
)
  .handleAction(actions.setPage, (state, { payload }) => ({
    page: payload.page
}))