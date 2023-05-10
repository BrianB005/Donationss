import { SWITCH_PAGE } from "../constants/activePageConstants";

export const switchPageReducer = (state = {}, action) => {
  if (action.type === SWITCH_PAGE) {
    return { ...state, page: action.payload };
  } else {
    return { ...state };
  }
};
