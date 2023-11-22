import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "CartSlice",
  initialState: {
    cart: [],
    filteredProduct: [],
    searchTerm: false,
    categoryProducts: [],
  },

  reducers: {
    handleCart: (state, action) => {
      // state.cart = [...state.cart, action.payload];
      const uniqueIds = new Set();
      const uniqueCart = state.cart.filter((item) => {
        if (!uniqueIds.has(item._id)) {
          uniqueIds.add(item._id);
          return true;
        }
        return false;
      });

      state.cart = [
        ...uniqueCart.map((prod) => {
          if (action.payload._id == prod._id) {
            return {
              ...prod,

              quantity: prod.quantity + action.payload.quantity,
              totalAmount: prod.totalAmount + action.payload.totalAmount,
            };
          } else {
            return {
              ...prod,
            };
          }
        }),
        action.payload,
      ];
      // const userArray = ["Obaseki", 25];
      localStorage.setItem("cartData", JSON.stringify(state.cart));
    },
    handlePlus: (state, action) => {
      const uniqueIds = new Set();
      const uniqueCart = state.cart.filter((item) => {
        if (!uniqueIds.has(item._id)) {
          uniqueIds.add(item._id);
          return true;
        }
        return false;
      });
      state.cart = [
        ...uniqueCart.map((prod) => {
          if (action.payload._id == prod._id) {
            return {
              ...prod,
              totalAmount: 0,
              quantity: prod.quantity + 1,
              totalAmount: prod.price * (prod.quantity + 1),
            };
          } else {
            return {
              ...prod,
            };
          }
        }),
        action.payload,
      ];
      localStorage.setItem("cartData", JSON.stringify(state.cart));
    },
    handleCartRemove: (state, action) => {
      const uniqueIds = new Set();
      const uniqueCart = state.cart.filter((item) => {
        if (!uniqueIds.has(item._id)) {
          uniqueIds.add(item._id);
          return true;
        }
        return false;
      });

      state.cart = [
        ...uniqueCart.map((prod) => {
          if (action.payload._id == prod._id && prod.quantity != 1) {
            return {
              ...prod,
              totalAmount: 0,
              quantity: prod.quantity - 1,
              totalAmount: prod.price * (prod.quantity - 1),
            };
          } else {
            return {
              ...prod,
            };
          }
        }),
        action.payload,
      ];
      localStorage.setItem("cartData", JSON.stringify(state.cart));
    },
    handleProdDelete: (state, action) => {
      state.cart = state.cart.filter((prod) => prod._id != action.payload._id);
      localStorage.setItem("cartData", JSON.stringify(state.cart));
    },
    handleFilteredProduct: (state, action) => {
      state.filteredProduct = action.payload;
    },
    handleIsSearchEmpty: (state, action) => {
      state.searchTerm = action.payload;
    },
    handleCategoryProducts: (state, action) => {
      state.categoryProducts = action.payload;
    },
    handleReset: (state, action) => {
      state.cart = [];
      localStorage.setItem("cartData", JSON.stringify(state.cart));
    },
  },
});

export default CartSlice.reducer;
export const {
  handleCart,
  handleCartRemove,
  handleIsSearchEmpty,
  handleFilteredProduct,
  handlePlus,
  handleProdDelete,
  handleCategoryProducts,
  handleReset,
} = CartSlice.actions;
