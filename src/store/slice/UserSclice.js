import { createSlice } from "@reduxjs/toolkit";

import { clearAllUsers } from "../actions";

const UserSclice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    removeUser(state, action) {
      const userIdToRemove = action.payload;

      return state.filter((user) => user !== userIdToRemove);
    },
    // clearAllUsers(state, action) {
    //   return (state = []);
    // },
  },
  extraReducers(builder) {
    builder.addCase(clearAllUsers, () => {
      return [];
    });
  },
});

export default UserSclice;
export const { addUser, removeUser } = UserSclice.actions;
