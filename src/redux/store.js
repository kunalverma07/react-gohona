import { configureStore } from "@reduxjs/toolkit";
import toggleSidebar from "./slices/SidebarSlice";
import uploadImageSlice from "./slices/ImageSlice";
import productSlice from "./slices/ProductSlice";
import CartSlice from "./slices/CartSlice";
import bannerSlice from "./slices/BannerSlice";
import OrderSlice from "./slices/OrderSlice";
import UniqueSlice from "./slices/UniqueSlice";

const store = configureStore({
  reducer: {
    toggleSidebar,
    uploadImageSlice,
    productSlice,
    CartSlice,
    bannerSlice,
    OrderSlice,
    UniqueSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
