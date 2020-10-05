import { combineReducers } from "redux";
import authReducer from "./authReducer";
import alertReducer from "./alertReducer";
import plansReducer from "./plansReducer";
export default combineReducers({ authReducer, alertReducer, plansReducer });
