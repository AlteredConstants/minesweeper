import { combineReducers } from "redux";
import { Action } from "../action";
import { State } from "../interface";
import game from "./gameReducer";

export default combineReducers<State, Action>({ game });
