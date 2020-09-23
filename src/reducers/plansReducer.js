import { ADD_PLAN } from "../actions/Types";

const initialState = {
  plans: [
    {
      id: 1,
      title: "House Purchase",
      amount: "1212",
      date: "2020-09-25",
    },
  ],
  current: null,
  filtered: null,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLAN:
      return {
        ...state,
        plans: [...state.plans, action.payload],
      };
    default:
      return state;
  }
};
