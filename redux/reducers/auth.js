import * as t from "../types";

const auth = (
  state = {
    user: null,
    isloading: false,
    error: null,
  },
  action
) => {
  switch (action.type) {
    case t.FETCH_USER_START:
      return { ...state, isLoading: true };

    case t.FETCH_USER_SUCCESS:
      return { ...state, isLoading: false, user: action.paylaod };

    case t.FETCH_USER_FAIL:
      return { ...state, isLoading: false, user: action.paylaod };

    default:
      return { ...state };
  }
};
