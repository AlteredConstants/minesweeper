import { combineReducers } from "redux";
import { Action } from "../action";
import { FieldConfig, State } from "../interface";
import field from "./field";

// Beginner: 9x9x10
// Intermediate: 16x16x40
// Expert: 30x16x99

export const defaultFieldConfig = { width: 30, height: 16, mineCount: 99 };

function fieldConfig(state = defaultFieldConfig, _action: Action): FieldConfig {
  return state;
}

export default combineReducers<State, Action>({ fieldConfig, field });
