import { ADD_PLAN, GET_PLAN, PLAN_ERROR } from "../actions/Types";

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
        plans: [action.payload, ...state.plans],
        loading: false,
      };
      case PLAN_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
