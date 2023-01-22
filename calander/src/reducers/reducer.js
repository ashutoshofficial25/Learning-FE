import { CHANGE_MONTH } from "../actions/calanderAcions";

//reducers are just pure functions
const initialState = {};

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MONTH:
    //logic for change month
    default:
      return state;
  }
};
