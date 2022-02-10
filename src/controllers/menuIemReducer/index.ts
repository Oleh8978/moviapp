import { createReducer, ActionType } from "typesafe-actions";

// Actions
import * as actions from "./actions";

import { ISelectedItem } from "./models";

export type TypeSelect = ActionType<typeof actions>;

/* Reducer */
const initialState: ISelectedItem = {
    item: 'Movies'
};

export const menuSelectItemReducer = createReducer<ISelectedItem, TypeSelect>(
    initialState
)
  .handleAction(actions.setMenuItem, (state, { payload }) => ({
    item: payload.item
}))