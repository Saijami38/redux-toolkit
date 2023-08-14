import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  return response.data;
});

export const fetchOtherData = createAsyncThunk("fetchOtherData", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/photos"
  );
  return response.data;
});

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    isLoading: false,
    data: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchTodos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTodos.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchOtherData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchOtherData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchOtherData.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default todoSlice.reducer;
