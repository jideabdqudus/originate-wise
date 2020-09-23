import { ADD_PLAN } from '../actions/Types'

    const initialState = {
        users:[
            {
                id:1,
                name:"John Doe"
            }
        ]
    }

    export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLAN:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
}