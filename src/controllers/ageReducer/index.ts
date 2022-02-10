import { createReducer, ActionType } from "typesafe-actions";

// Actions
import * as actions from "./action";

import { IAge } from "./models";

export type TypeAgeReducer = ActionType<typeof actions>;

/* Reducer */
const initialState: IAge = {
    age: 18
};

export const ageReducer = createReducer<IAge, TypeAgeReducer>(
    initialState
)
  .handleAction(actions.setNewAge, (state, { payload }) => ({
    age: payload.age
}))