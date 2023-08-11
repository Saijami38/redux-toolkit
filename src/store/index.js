import { configureStore } from "@reduxjs/toolkit";
import UserSclice from "./slice/UserSclice";
import todoSlice from "./slice/TodoSlice";

const store = configureStore({
  reducer: {
    users: UserSclice.reducer,
    todo: todoSlice,
  },
});

export default store;
