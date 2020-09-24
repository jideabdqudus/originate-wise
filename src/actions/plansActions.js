import { ADD_PLAN, GET_PLAN, SET_LOADING } from "./Types";

export const getPlan = () => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch("/plans");
    const data = await res.json();

    dispatch({
      type: GET_PLAN,
      payload: data,
    });
  } catch (err) {
    console.error(err);
  }
};

// export const addPlan = (plan) => {
//   return {
//     type: ADD_PLAN,
//     payload: plan,
//   };
// };

export const addPlan = (plan) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/plans", {
      method: "POST",
      body: JSON.stringify(plan),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    dispatch({
      type: ADD_PLAN,
      payload: data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

