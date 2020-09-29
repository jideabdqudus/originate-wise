import { combineReducers } from "redux";
import authReducer from "./authReducer";
import plansReducer from "./plansReducer";
import alertReducer from "./alertReducer";

export default combineReducers({
  plansReducer,
  authReducer,
  alertReducer,
});
