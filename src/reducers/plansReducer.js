import { ADD_PLAN, GET_PLAN } from "../actions/Types";

const initialState = {
  plans: [],
  current: null,
  filtered: null,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PLAN:
      return {
        ...state,
        plans: action.payload,
        loading: false,
      };
    case ADD_PLAN:
      return {
        ...state,
        plans: [...state.plans, action.payload],
      };
    default:
      return state;
  }
};
