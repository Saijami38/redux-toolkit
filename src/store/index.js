import { configureStore } from "@reduxjs/toolkit";
import UserSclice from "./slice/UserSclice";

const store = configureStore({
  reducer: {
    users: UserSclice.reducer,
  },
});

export default store;
