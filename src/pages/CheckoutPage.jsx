/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Navbar } from "../components";
import Home from "./Home";
import SideNavbar from "../components/Home/SideNavbar";
import Footer from "../components/common/Footer";
import SubNavbar from "../components/Home/SubNavbar";
import MobileFooter from "../components/common/MobileFooter";
import Checkout from "../components/checkout/Checkout";
import CartSidebar from "../components/Home/CartSidebar";
import CategorieSidebar from "../components/Home/CategorieSidebar";
import { useLocation } from "react-router-dom";

const CheckoutPage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="home__Container--1">
      <Navbar />
      {/* <SubNavbar /> */}
      <Checkout />
      <Footer />
      <div className="block md:hidden">
        <MobileFooter />
      </div>
      <SideNavbar />
      <CartSidebar />
      <CategorieSidebar />
    </div>
  );
};

export default CheckoutPage;
