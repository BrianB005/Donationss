import {
  SEND_MAIL_FAIL,
  SEND_MAIL_REQUEST,
  SEND_MAIL_SUCCESS,
} from "../constants/emailConstants";

export const emailsReducer = (state = {}, action) => {
  switch (action.type) {
    case SEND_MAIL_REQUEST:
      return { ...state, loading: true };
    case SEND_MAIL_SUCCESS:
      return { ...state, loading: false, feedback: action.payload };
    case SEND_MAIL_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return { ...state };
  }
};
