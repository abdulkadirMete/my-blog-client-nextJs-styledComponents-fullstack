import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import { createWrapper } from "next-redux-wrapper";

export const store = () =>
  configureStore({
    reducer: {
      auth: authSlice,
    },
  });

export const wrapper = createWrapper(store);
