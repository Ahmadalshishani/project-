import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/index";
import compareReducer from "./compare/index";

export default configureStore({
  reducer: { auth: authReducer, compare: compareReducer },
});
