import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
  try {
    const response = await axios.get("https://api.publicapis.org/entries");
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

export const fetchOtherData = createAsyncThunk("fetchOtherData", async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/photos"
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
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
