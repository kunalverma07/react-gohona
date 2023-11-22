/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//create action
export const bannerImage = createAsyncThunk(
  "bannerImage",

  async (formData, { rejectWithValue }) => {
    const response = await fetch(
      `${import.meta.env.VITE_APP_BASE_URL}/banner/create-banner`,
      {
        method: "POST",
        body: formData,
      }
    );

    try {
      const result = await response.json();
      console.log("result", result);
      return result;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

//read action
export const getUploadedBanner = createAsyncThunk(
  "getUploadedBanner",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      `${import.meta.env.VITE_APP_BASE_URL}/banner/get-all-banners`
    );

    try {
      const result = await response.json();

      return result.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//delete action
export const deleteBanner = createAsyncThunk(
  "deleteBanner",
  async (id, { rejectWithValue }) => {
    const response = await fetch(
      `${import.meta.env.VITE_APP_BASE_URL}/banner/delete-banner/${id}`,
      {
        method: "DELETE",
      }
    );

    try {
      const result = await response.json();

      console.log("deleteBanner action", result);

      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const bannerSlice = createSlice({
  name: "bannerSlice",
  initialState: {
    bannerImages: [],
    loading: false,
    error: null,
    message: null,
  },

  reducers: {
    ResetAllBannerImage: (state) => {
      state.success = false;
      state.error = null;
      state.message = null;
    },
  },

  extraReducers: {
    [bannerImage.pending]: (state) => {
      state.loading = true;
    },
    [bannerImage.fulfilled]: (state, action) => {
      state.loading = false;
      state.success = true;
      state.message = action.payload.message;
    },
    [bannerImage.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [getUploadedBanner.pending]: (state) => {
      state.loading = true;
    },
    [getUploadedBanner.fulfilled]: (state, action) => {
      state.loading = false;
      state.bannerImages = action.payload;
    },
    [getUploadedBanner.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [deleteBanner.pending]: (state) => {
      state.loading = true;
    },
    [deleteBanner.fulfilled]: (state, action) => {
      state.loading = false;
      state.success = true;
      state.message = action.payload.message;
    },
    [deleteBanner.rejected]: (state, action) => {
      state.loading = false;
      state.success = false;
    },
  },
});

export default bannerSlice.reducer;
export const { ResetAllBannerImage } = bannerSlice.actions;
