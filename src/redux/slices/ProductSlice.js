/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//create action

export const createProduct = createAsyncThunk(
  "createProduct",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      `${import.meta.env.VITE_APP_BASE_URL}/product/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data }),
      }
    );

    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//read action
export const getProduct = createAsyncThunk(
  "getProduct",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      `${import.meta.env.VITE_APP_BASE_URL}/product/get-all`
    );

    try {
      const result = await response.json();

      return result.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getProductByCategory = createAsyncThunk(
  "getProductByCategory",
  async (category, { rejectWithValue }) => {
    const response = await fetch(
      `${import.meta.env.VITE_APP_BASE_URL}/product/get-product-byCategory`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(category),
      }
    );
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//delete action
export const deleteProduct = createAsyncThunk(
  "deleteProduct",
  async (id, { rejectWithValue }) => {
    const response = await fetch(
      `${import.meta.env.VITE_APP_BASE_URL}/product/delete-product/${id}`,
      {
        method: "DELETE",
      }
    );

    try {
      const result = await response.json();

      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//delete action
export const updateProduct = createAsyncThunk(
  "updateProduct",
  async (data, { rejectWithValue }) => {
    console.log("update action data", data);
    const response = await fetch(
      `${import.meta.env.VITE_APP_BASE_URL}/product/update-product/${data.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data }),
      }
    );

    try {
      console.log("update action", response);

      const result = await response.json();

      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const productSlice = createSlice({
  name: "productSlice",
  initialState: {
    products: [],
    loading: false,
    error: null,
    success: false,
    createSuccess: false,
    deleteSuccess: false,
  },

  reducers: {
    ResetAllProduct: (state) => {
      state.success = false;
      state.createSuccess = false;
      state.deleteSuccess = false;
    },
  },

  extraReducers: {
    [createProduct.pending]: (state) => {
      state.loading = true;
    },
    [createProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.success = true;
    },
    [createProduct.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [getProduct.pending]: (state) => {
      state.loading = true;
    },
    [getProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    [getProduct.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [deleteProduct.pending]: (state) => {
      state.loading = true;
    },
    [deleteProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.deleteSuccess = true;
    },
    [deleteProduct.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [updateProduct.pending]: (state) => {
      state.loading = true;
    },
    [updateProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.success = true;
    },
    [updateProduct.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default productSlice.reducer;
export const { ResetAllProduct } = productSlice.actions;
