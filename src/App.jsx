/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Auth Context Imports
import { AuthContext } from "./context/auth-context";

import Main from "./pages/Main";
import Admin from "./pages/Admin";
import {
  Dashboard,
  BannerLayout,
  ProdImgsLayout,
  ProdListLayout,
  OrdersLayout,
  SocialLink,
} from "./pages/Admin/index";
import Products from "./components/Home/Products";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(false);

  // console.log("isLoggedin ==>", isLoggedIn);

  useEffect(() => {
    // Check if the user is logged in by retrieving fooduser from local storage
    const adminInfo = JSON.parse(localStorage.getItem("fooduser"));
    if (adminInfo) {
      setIsLoggedIn(true);
      setUserId(adminInfo.userId);
    }
  }, []);

  const login = () => {
    setIsLoggedIn(true);
    // setUserId(token);
    setUserId();
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserId(null);
    localStorage.removeItem("fooduser");
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <Router>
        {isLoggedIn ? (
          <>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/admin/" element={<Admin />} />
              <Route path="/admin/dashboard/" element={<Dashboard />} />
              <Route path="/admin/banner/" element={<BannerLayout />} />
              <Route
                path="/admin/product/images/"
                element={<ProdImgsLayout />}
              />
              <Route
                path="/admin/products/list/"
                element={<ProdListLayout />}
              />
              <Route path="/admin/orders/list/" element={<OrdersLayout />} />
              <Route path="/admin/social/links/" element={<SocialLink />} />
              <Route path="/checkout" element={<CheckoutPage />} />
            </Routes>
            <ToastContainer
              position="top-right"
              autoClose={2000}
              limit={10}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </>
        ) : (
          <>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/admin/" element={<Admin />} />
              <Route path="/admin/dashboard/" element={<Dashboard />} />
              <Route path="/admin/banner/" element={<BannerLayout />} />
              <Route
                path="/admin/product/images/"
                element={<ProdImgsLayout />}
              />
              <Route
                path="/admin/products/list/"
                element={<ProdListLayout />}
              />
              <Route path="/admin/orders/list/" element={<OrdersLayout />} />
              <Route path="/admin/social/links/" element={<SocialLink />} />
              <Route path="/checkout" element={<CheckoutPage />} />
            </Routes>
            <ToastContainer
              position="top-right"
              autoClose={2000}
              limit={10}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </>
        )}
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
