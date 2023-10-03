import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const apiKey = process.env.REACT_APP_RAPIDAPI_KEY;

export const fetchMoivesData = createAsyncThunk(
  "moives/fetchMoivesData",
  async () => {
    const options = {
      method: "GET",
      url: "https://moviesdatabase.p.rapidapi.com/actors/random",
      headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
      },
    };

    const res = await axios.request(options);
    return res.data;
  }
);

const MoivesSlice = createSlice({
  name: "moviesData",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder

      .addCase(fetchMoivesData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMoivesData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.data = action.payload?.results;
      })
      .addCase(fetchMoivesData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default MoivesSlice.reducer;
