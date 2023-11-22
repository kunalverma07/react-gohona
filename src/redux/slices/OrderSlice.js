/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//create action

export const createOrder = createAsyncThunk(
  "createOrder",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      `${import.meta.env.VITE_APP_BASE_URL}/orders/create-orders`,
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
      console.log(result);
      return result;
    } catch (error) {
      console.log("error ---");
      return rejectWithValue(error);
    }
  }
);

//read action
export const getOrders = createAsyncThunk(
  "getOrder",
  async (data, { rejectWithValue }) => {
    console.log("getProduct action");
    const response = await fetch(
      `${import.meta.env.VITE_APP_BASE_URL}/orders/get-orders`
    );

    try {
      const result = await response.json();

      console.log("getOrders action", result);

      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const OrderSlice = createSlice({
  name: "OrderSlice",
  initialState: {
    orders: [],
    loading: false,
    error: null,
    success: false,
    deleteSuccess: false,
  },

  reducers: {
    ResetAllProduct: (state) => {
      state.success = false;
      state.deleteSuccess = false;
    },
  },

  extraReducers: {
    [getOrders.pending]: (state) => {
      state.loading = true;
    },
    [getOrders.fulfilled]: (state, action) => {
      state.loading = false;
      state.orders = action.payload;
    },
    [getOrders.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default OrderSlice.reducer;
export const { ResetAllProduct } = OrderSlice.actions;
