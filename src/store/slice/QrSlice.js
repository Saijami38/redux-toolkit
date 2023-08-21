import { createSlice } from "@reduxjs/toolkit";

const qrSlice = createSlice({
  name: "QR",
  initialState: [],
  reducers: {
    setQR: (state, action) => {
      return (state = action.payload);
    },
    resetQR: (state, action) => {
      return (state = []);
    },
  },
});

export const { setQR, resetQR } = qrSlice.actions;
export default qrSlice;
