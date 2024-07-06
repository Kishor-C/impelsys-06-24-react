// a global state is created using configureStore method of reduxjs toolkit
// configureStore({reducer: {counter: reducer}})

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducer/counterSlice.js";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
