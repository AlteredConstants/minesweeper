import { combineReducers } from "redux";
import { Action } from "../action";
import { State } from "../interface";
import field from "./field";

export default combineReducers<State, Action>({ field });
