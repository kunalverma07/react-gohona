import { createSlice } from "@reduxjs/toolkit";

export const uniqueSlice = createSlice({
  name: "uniqueSlice",
  initialState: {
    uniqueProd: [],
  },

  reducers: {
    handleUniqueProducts: (state, action) => {
      state.uniqueProd = action.payload;
    },
  },
});

export default uniqueSlice.reducer;
export const { handleUniqueProducts } = uniqueSlice.actions;
