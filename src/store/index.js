import { configureStore } from "@reduxjs/toolkit";
import UserSclice from "./slice/UserSclice";
import todoSlice from "./slice/TodoSlice";
import qrSlice from "./slice/QrSlice";

const store = configureStore({
  reducer: {
    users: UserSclice.reducer,
    todo: todoSlice,
    QR: qrSlice.reducer,
  },
});

export default store;
