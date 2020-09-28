import { combineReducers } from "redux";
import authReducer from "./authReducer";
import plansReducer from "./plansReducer";

export default combineReducers({
  plansReducer,
  authReducer,
});
