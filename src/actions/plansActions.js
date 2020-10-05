import axios from "axios";
import { ADD_PLAN, GET_PLAN, PLAN_ERROR } from "./Types";

//Get Plan
export const getPlan = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/plans");

    dispatch({ type: GET_PLAN, payload: res.data });
  } catch (error) {
    dispatch({ type: PLAN_ERROR, payload: error.response.msg });
  }
};  

// Add post
export const addPlan = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post("/api/plans", formData, config);
    dispatch({
      type: ADD_PLAN,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PLAN_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
