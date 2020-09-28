import axios from "axios";
import { ADD_PLAN, GET_PLAN, PLAN_ERROR } from "./Types";

//Get Contacts
// const getPlan = async (dispatch) => {
//   try {
//     const res = await axios.get("/api/plans");
//     dispatch({ type: GET_PLAN, payload: res.data });
//   } catch (error) {
//     dispatch({ type: PLAN_ERROR, payload: error.response.msg });
//   }
// };



export const addPlan = (plan) => {
  return {
    type: ADD_PLAN,
    payload: plan,
  };
};
