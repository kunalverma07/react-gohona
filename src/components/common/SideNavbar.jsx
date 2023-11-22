/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { handleToggle } from "../../redux/slices/SidebarSlice";
import { handleMainToggle } from "../../redux/slices/SidebarSlice";

function Sidebar() {
  //   const [mainIsOpen, setIsOpen] = useState(true);
  const toggleSidebarState = useSelector((state) => state.toggleSidebar);
  const { mainIsOpen } = toggleSidebarState;
  const dispatch = useDispatch();

  console.log("toggleSidebarState ==>", toggleSidebarState);

  const toggleSidebar = () => {
    dispatch(handleMainToggle(!mainIsOpen));
  };

  return (
    <aside
      className={`bg-gray-200 text-gray-700 w-64 overflow-x-scroll h-full ${
        mainIsOpen ? "translate-x-0" : "-translate-x-64"
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="px-6 py-4">
        <a href="index.html" className="text-2xl font-bold text-gray-700">
          {/* Your logo here */}
        </a>
        <button className="float-right text-xl mt-2">
          <i className="icofont-close" onClick={toggleSidebar}></i>
        </button>
      </div>
      <div className="p-4 ">
        <ul className="space-y-2 font-medium">
          <li>
            <a href="index.html" className="flex items-center text-gray-600">
              <i className="icofont-home mr-2"></i>Home
            </a>
          </li>
          <li className="relative group">
            <a
              href="#"
              className="flex items-center text-gray-600 group-hover:bg-gray-700 "
            >
              <i className="icofont-page mr-2"></i>Category
            </a>
            <ul className="absolute left-64 top-0 hidden text-gray-600 mt-1 space-y-2 bg-gray-200  group-hover:block">
              <li>
                <a href="category/food-powders.html">Food Powders</a>
              </li>
              <li>
                <a href="category/earthy-essence.html">Earthy Essence</a>
              </li>
              <li>
                <a href="category/sweets.html">Sweets</a>
              </li>
              <li>
                <a href="category/sevories.html">Savouries</a>
              </li>
              <li>
                <a href="category/pickles.html">Pickles</a>
              </li>
              <li>
                <a href="category/dairy.html">Dairy</a>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <a
              href="#"
              className="flex items-center text-gray-600 group-hover:bg-gray-700 "
            >
              <i className="icofont-bag-alt mr-2  "></i>My Account
            </a>
            <ul className="absolute left-64 top-0 hidden mt-1 space-y-2 bg-gray-700 text-gray-200 group-hover:block">
              <li>
                <a href="#">Profile</a>
              </li>
              <li>
                <a href="#">Checkout</a>
              </li>
              <li>
                <a href="#">Order History</a>
              </li>
              <li>
                <a href="#">Order Invoice</a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="pages/about.html"
              className="flex items-center text-gray-600"
            >
              <i className="icofont-info-circle mr-2"></i>About Us
            </a>
          </li>
          <li>
            <a
              href="pages/faq.html"
              className="flex items-center text-gray-600"
            >
              <i className="icofont-contacts mr-2"></i>FAQ
            </a>
          </li>
          <li>
            <a
              href="pages/policy.html"
              className="flex items-center text-gray-600"
            >
              <i className="icofont-warning mr-2"></i>Policy
            </a>
          </li>
          <li>
            <a
              href="auth/login.html"
              className="flex items-center text-gray-600"
            >
              <i className="icofont-login mr-2"></i>Login
            </a>
          </li>
        </ul>
      </div>
      <div className="p-4">
        <div className="space-y-2">
          <div className="flex items-center text-gray-600">
            <i className="icofont-ui-touch-phone mr-2"></i>
            <p>
              <small>Call Us</small>
              <span>(+91) 924 - 679 - 9010</span>
            </p>
          </div>
          <div className="flex items-center">
            <i className="icofont-phone mr-2"></i>
            <p>
              <small>Call Us</small>
              <span>(+91) 812 - 120 - 1010</span>
            </p>
          </div>
          <div className="flex items-center">
            <i className="icofont-ui-email mr-2"></i>
            <p>
              <small>Email Us</small>
              <span>support@srimatreyfoods.com</span>
            </p>
          </div>
        </div>
      </div>
      <div className="p-4 mt-auto">
        <p className="text-gray-500">
          All Rights Reserved by <a href="index.html">Gohona</a>
        </p>
      </div>
    </aside>
  );
}

export default Sidebar;
