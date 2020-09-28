import { ADD_PLAN} from "./Types";



export const addPlan = (plan) => {
  return {
    type: ADD_PLAN,
    payload: plan,
  };
};
