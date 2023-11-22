/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const baseUrl = process.env.REACT_APP_BASE_URL;

//create action

export const uploadImage = createAsyncThunk(
  "uploadImage",
  async (formData, { rejectWithValue }) => {
    console.log("FormData:", Object.fromEntries(formData));
    const file = formData.get("images");

    if (!file || (file.type !== "image/jpeg" && file.type !== "image/png")) {
      return rejectWithValue(
        "Invalid file type. Please upload a jpg or png image."
      );
    }

    const response = await fetch(
      `${import.meta.env.VITE_APP_BASE_URL}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    try {
      const result = await response.json();
      console.log("result is", result);
      return result;
    } catch (error) {
      console.log("error", error);
      return rejectWithValue(error);
    }
  }
);

//read action
export const getUploadedImage = createAsyncThunk(
  "getUploadedImage",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      `${import.meta.env.VITE_APP_BASE_URL}/image/get-images`
    );

    try {
      const result = await response.json();
      return result.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const uploadImageSlice = createSlice({
  name: "uploadImageSlice",
  initialState: {
    uploadedImages: [],
    loading: false,
    error: null,
    imgsuccess: false,
    imgValid: false,
  },

  reducers: {
    ResetAllUploadImage: (state) => {
      state.imgsuccess = false;
      state.imgValid = false;
    },
  },

  extraReducers: {
    [uploadImage.pending]: (state) => {
      state.loading = true;
    },
    [uploadImage.fulfilled]: (state, action) => {
      state.loading = false;
      state.imgsuccess = true;
    },
    [uploadImage.rejected]: (state, action) => {
      state.loading = false;
      state.imgsuccess = false;
      state.error = action.payload.message;
      state.imgValid = true;
    },
    [getUploadedImage.pending]: (state) => {
      state.loading = true;
    },
    [getUploadedImage.fulfilled]: (state, action) => {
      state.loading = false;
      state.uploadedImages = action.payload;
    },
    [getUploadedImage.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default uploadImageSlice.reducer;
export const { ResetAllUploadImage } = uploadImageSlice.actions;
