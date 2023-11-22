/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Navbar } from "../components";
import Home from "./Home";
import SideNavbar from "../components/Home/SideNavbar";
import Footer from "../components/common/Footer";
import SubNavbar from "../components/Home/SubNavbar";
import MobileFooter from "../components/common/MobileFooter";
import CartSidebar from "../components/Home/CartSidebar";
import CategorieSidebar from "../components/Home/CategorieSidebar";

const Main = () => {
  return (
    <div className="home__Container--1">
      <Navbar />
      <SubNavbar />
      <Home />
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

export default Main;
