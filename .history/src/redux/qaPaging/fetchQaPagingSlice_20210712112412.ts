import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface NewBeeMallProductQaPagingState {
  loading: boolean;
  error: string | null;
  data: any;
  pagination: any;
}

const initialState: NewBeeMallProductQaPagingState = {
  loading: true,
  error: null,
  data: null,
  pagination: null,
};

export const fetchQaPagingDataActionCreator = createAsyncThunk(
  "descSlice/fetchQaPagingDataActionCreator",
  async (
    paramaters: {
      page: string;
    },
    thunkAPI
  ) => {
    let url = `http://localhost:8081/qaPaging?pageNumber=${paramaters.page}`;

    const response = await axios.get(url);
    return {
      data: response.data,
      pagination: JSON.parse(response.data),
    };
  }
);
export const newBeeMallQaPagingSlice = createSlice({
  name: "descSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchQaPagingDataActionCreator.pending.type]: (state) => {
      // return { ...state, loading: true };
      state.loading = true;
    },
    [fetchQaPagingDataActionCreator.fulfilled.type]: (state, action) => {
      //debugger;
      state.data = action.payload.data;

      console.log("lllllllQaPaging", state.data);

      state.pagination = action.payload.pagination;

      state.loading = false;
      state.error = null;
    },
    [fetchQaPagingDataActionCreator.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      //   const ddd = action.payload;
      state.loading = false;
      state.error = action.payload;
    },
  },
});
