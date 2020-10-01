import api from "../utils/api";
import axios from "axios";
import { ADD_PLAN, GET_PLAN, PLAN_ERROR } from "./Types";
import setAuthToken from "../utils/setAuthToken";

// export const getPlan = () => async (dispatch) => {
//   setAuthToken(localStorage.token);
//   try {
//     const res = await api.get("/plans");
//     dispatch({
//       type: GET_PLAN,
//       payload: res.data,
//     });
//     console.log("Get Plan Successful");
//   } catch (err) {
//     dispatch({
//       type: PLAN_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status },
//     });
//     console.log("Get Plan NOT Successful");
//   }
// };

export const getPlan = () => async (dispatch) => {
    setAuthToken(localStorage.token);
  try {
    const res = await axios.get("/api/plans");

    dispatch({ type: GET_PLAN, payload: res.data });
    console.log("Get Plan Successful");
  } catch (error) {
    dispatch({ type: PLAN_ERROR, payload: error.response.msg });
  }
};

// Add post
export const addPlan = (formData) => async (dispatch) => {
  setAuthToken(localStorage.token);
  try {
    const res = await api.post("/plans", formData);

    dispatch({
      type: ADD_PLAN,
      payload: res.data,
    });
    console.log("Successful");
  } catch (err) {
    dispatch({
      type: PLAN_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
