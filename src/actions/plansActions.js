import api from "../utils/api";
import { ADD_PLAN, GET_PLAN, PLAN_ERROR } from "./Types";
import setAuthToken from "../utils/setAuthToken";

export const getPlan = () => async (dispatch) => {
  setAuthToken(localStorage.token);
  try {
    const res = await api.get("/plans");
    dispatch({
      type: GET_PLAN,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PLAN_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
     
    });
  }
};


export const addPlan = (plan) => {
  return {
    type: ADD_PLAN,
    payload: plan,
  };
};
