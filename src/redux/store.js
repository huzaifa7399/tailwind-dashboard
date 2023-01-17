import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./Slices/Dashboard";
import usersReducer from "./Slices/Users";
const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    users: usersReducer,
  },
});

export default store;
