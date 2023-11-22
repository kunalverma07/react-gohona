import { createSlice } from "@reduxjs/toolkit";

export const toggleSidebarSlice = createSlice({
  name: "toggleSidebarSlice",
  initialState: {
    isOpen: true,
    mainIsOpen: false,
    cartIsOpen: false,
    categoryIsOpen: false,
    totalAmount: 0,
  },

  reducers: {
    handleToggle: (state, action) => {
      state.isOpen = action.payload;
    },
    handleMainToggle: (state, action) => {
      state.mainIsOpen = action.payload;
    },
    handleCartToggle: (state, action) => {
      state.cartIsOpen = action.payload;
    },
    handleCategoryToggle: (state, action) => {
      state.categoryIsOpen = action.payload;
    },
    setTotal: (state, action) => {
      state.totalAmount = action.payload;
    },
  },
});

export default toggleSidebarSlice.reducer;
export const {
  handleToggle,
  setTotal,
  handleMainToggle,
  handleCartToggle,
  handleCategoryToggle,
} = toggleSidebarSlice.actions;
