import {
  SEND_MAIL_FAIL,
  SEND_MAIL_REQUEST,
  SEND_MAIL_SUCCESS,
} from "../constants/emailConstants";
import axios from "axios";
export const sendMail = (email, name, title, message) => async (dispatch) => {
  dispatch({
    type: SEND_MAIL_REQUEST,
    payload: { name, email, title, message },
  });
  try {
    const { data } = await axios.post(
      "https://empower-her.herokuapp.com/api/v1/emails",
      {
        name,
        email,
        title,
        message,
      }
    );
    dispatch({ type: SEND_MAIL_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SEND_MAIL_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message,
    });
  }
};
