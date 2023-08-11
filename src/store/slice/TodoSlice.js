import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  return response.json();
});

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    isLoading: false,
    data: [],
  },
  extraReducers: (bulider) => {
    bulider.addCase(fetchTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    bulider.addCase(fetchTodos.pending, (state, action) => {
      state.isLoading = true;
    });
    bulider.addCase(fetchTodos.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isLoading = true;
    });
  },
});

export default todoSlice.reducer;
