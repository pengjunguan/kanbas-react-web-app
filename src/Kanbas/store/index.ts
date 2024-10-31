import { configureStore } from "@reduxjs/toolkit";
import assignmentsReducer from "../Courses/Assignments/reducer";
import accountReducer from "../Account/reducer";

const store = configureStore({
    reducer: {
      assignmentsReducer,
      accountReducer,
    },
  });
  export default store;