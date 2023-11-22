/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { BsFillBasket2Fill } from "react-icons/bs";
import Sidebar from "../admin/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import {
  handleCartToggle,
  handleMainToggle,
} from "../../redux/slices/SidebarSlice";
import SidebarNavbar from "../Home/SideNavbar";
import SideNavbar from "../Home/SideNavbar";

import logo from "../../../src/assets/logo/logo.png"
import {
  handleFilteredProduct,
  handleIsSearchEmpty,
} from "../../redux/slices/CartSlice";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import SubNavbar from "../Home/SubNavbar";

const Navbar = () => {
  const toggleSidebarState = useSelector((state) => state.toggleSidebar);
  const cartState = useSelector((state) => state.CartSlice);
  // const { cart, filteredProduct } = cartState;
  const { filteredProduct } = cartState;
  const { mainIsOpen, cartIsOpen, totalAmount } = toggleSidebarState;
  const productState = useSelector((state) => state.productSlice);
  const { products } = productState;
  const dispatch = useDispatch();

  const cart = JSON.parse(localStorage.getItem("cartData"));
  const uniqueIds = new Set();
  const uniqueCart = cart?.filter((item) => {
    if (!uniqueIds.has(item._id)) {
      uniqueIds.add(item._id);
      return true;
    }
    return false;
  });
  const toggleSidebar = () => {
    dispatch(handleMainToggle(!mainIsOpen));
  };
  const toggleCartSidebar = () => {
    dispatch(handleCartToggle(!cartIsOpen));
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const filteredData = products?.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    dispatch(handleFilteredProduct(filteredData));

    if (searchTerm) {
      dispatch(handleIsSearchEmpty(true));
    } else {
      dispatch(handleIsSearchEmpty(false));
    }
  }, [searchTerm]);
  const handleClick = (e) => {
    // if (searchValue == "") {
    // setSearchTerm("");
    setSearchValue(e.target.value);
    // } else {
    // }
  };

  return (
    <>
      <nav className="bg-white z-20 fixed top-0 shadow-md  w-full border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex  justify-items-center items-center mx-auto py-2 px-2 sm:px-8">
          <Link to="/">
            <img
              src={logo}
              className="h-14 md:h-20 mr-3"
              alt="logo"
              // onClick={() => toggleSidebar()}
            />
          </Link>
          {/* <SubNavbar /> */}
          {/* div one */}
          <div className="flex flex-1 md:flex-1 ">
            <div className="relative lg:ml-6 w-full mx-1 cursor-pointer block">
              <input
                type="text"
                id="search-navbar"
                value={searchValue}
                onChange={(e) => handleClick(e)}
                className="block flex-1 max-w-3xl w-full p-2 pl-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500 "
                placeholder="Search Products..."
              />
            </div>
            <button
              className="relative right-2 lg:right-32 hidden md:block  ml-2  text-white rounded-lg px-4 py-1.5 bg-green-500 hover:bg-green-600"
              onClick={() => setSearchTerm(searchValue)}
            >
              Search
            </button>
            <button
              className="relative right-2  ml-2 md:hidden block text-white rounded-lg px-2.5 py-1 bg-green-500 hover:bg-green-600"
              onClick={() => setSearchTerm(searchValue)}
            >
              <FiSearch />
            </button>
          </div>
          {/* cart */}
          <span
            className=" md:flex md:align-middle flex  gap-4 mt-6 hover:text-green-600 hover:delay-300 cursor-pointer"
            onClick={() => toggleCartSidebar()}
          >
            <span className="font-medium align-middle mt-2 ">
              ₹{totalAmount}
            </span>
            <div className="">
              <BsFillBasket2Fill className="align-middle transition ease-in-out hover:bg-[#119744ff] hover:delay-100 hover:text-white p-2 w-9 cursor-pointer h-9 bg-gray-100 rounded-full text-xl text-[#555555ff]" />
              <span className="h-10 w-10 relative text-sm bottom-12 left-6 px-0.5 pb-0.5 text-white rounded-full bg-[#119744ff]">
                {uniqueCart?.length}+
              </span>
            </div>
          </span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
