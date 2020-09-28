import { ADD_PLAN } from "../actions/Types";

const initialState = {
  plans: [
    {
      title: "Buy House",
      amount: "1211212",
      desc:"Mowe Ibafo",
      date: Date.now(),
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
