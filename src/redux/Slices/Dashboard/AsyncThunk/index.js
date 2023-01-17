import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../../axiosInstance";

export const fetchComments = createAsyncThunk(
  "/comments",
  async (_, { rejectWithValue }) => {
    try {
      const resp = await axiosInstance.get("/comments");
      return resp.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
