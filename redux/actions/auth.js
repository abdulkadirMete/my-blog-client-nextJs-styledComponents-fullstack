import * as t from "../types";
import axios from "axios";
import { apiUrl } from "../../data/data";

export const loginStart = () => (dispatch) =>
  dispatch({
    type: t.FETCH_USER_START,
  });

export const loginSuccess = (user) =>
  dispatch({
    type: t.FETCH_USER_SUCCESS,
    payload: user,
  });

export const loginFail = (error) =>
  dispatch({
    type: t.FETCH_USER_FAIL,
    payload: error,
  });

export const login = async (userInfo) => {
  try {
    loginStart();
    const res = await axios.post(`${apiUrl}/login`, userInfo);
    loginSuccess(res.data);
  } catch (error) {
    loginFail(error.message);
  }
};
