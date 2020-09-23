import { ADD_PLAN } from "../actions/Types";

const initialState = {
  posts: [
    {
      id: 1,
      title: "House Purchase",
      amount: "1212",
      date: "09/27/2020",
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLAN:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    default:
      return state;
  }
};
