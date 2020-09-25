import { ADD_PLAN, SET_LOADING } from "./Types";


export const addPlan = (plan) => {
  return {
    type: ADD_PLAN,
    payload: plan,
  };
};
