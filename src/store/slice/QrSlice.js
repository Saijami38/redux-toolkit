import { createSlice } from "@reduxjs/toolkit";

const qrSlice = createSlice({
  name: "QR",
  initialState: "https://media.kulfyapp.com/aTdBoR/aTdBoR-360.gif",
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
