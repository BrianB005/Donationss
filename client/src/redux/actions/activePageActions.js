import { SWITCH_PAGE } from "../constants/activePageConstants";

export const switchPage = (page) => (dispatch) => {
  dispatch({ type: SWITCH_PAGE, payload: page });
};
