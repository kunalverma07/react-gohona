import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { handleToggle } from "../../redux/slices/SidebarSlice";
import { handleMainToggle } from "../../redux/slices/SidebarSlice";
import logo from "../../assets/logo/logo.png";
import { AiOutlineRight } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

function SideNavbar() {
  //   const [mainIsOpen, setIsOpen] = useState(true);
  const toggleSidebarState = useSelector((state) => state.toggleSidebar);
  const { mainIsOpen } = toggleSidebarState;
  const dispatch = useDispatch();

  // console.log("toggleSidebarState ==>", toggleSidebarState);

  const toggleSidebar = () => {
    dispatch(handleMainToggle(!mainIsOpen));
  };

  return (
    <main className=" w-full  h-full">
      <button
        className={`float-right text-xl absolute  bg-gray-100 rounded-full p-3  left-[260px] top-5 z-50 bottom-4 h-10 w-10 ${
          mainIsOpen ? "translate-x-0" : "-translate-x-80"
        } transition-transform duration-500 ease-in-out`}
      >
        <RxCross2
          className=" relative  z-40 right-0.5 bottom-0.5"
          onClick={toggleSidebar}
        />
      </button>
      <aside
        className={`bg-gray-50 absolute top-0  z-40 text-gray-700 w-72 overflow-x-scroll h-full ${
          mainIsOpen ? "translate-x-0" : "-translate-x-72"
        } transition-transform duration-500 ease-in-out`}
      >
        <div className="px-6 py-2 pt-4">
          <span className="text-2xl flex justify-center font-bold border-b-[1px] border-gray-400  text-gray-700">
            <div className="flex justify-center">
              <img src={logo} alt="logo" className="h-14 mb-4" />
            </div>
          </span>
        </div>
        <div className="px-4 pl-2 text-lg z-50">
          <ul className="space-y-4 font-medium  border-gray-500">
            <li className="hover:bg-green-200 z-[100] rounded-md p-1">
              <a
                href="index.html"
                className="flex z-50 items-center text-gray-600"
              >
                <i className="icofont-home mr-2 text-xl"></i>
                Home
              </a>
            </li>
            <li className="relative group">
              <a
                href="#"
                className="flex items-center text-gray-600 py-1 group-hover:text-green-700 rounded-lg group-hover:bg-gray-200  "
              >
                <i className="icofont-page  mr-2 text-xl"></i>
                <p>Category</p>
                <AiOutlineRight className="ml-[105px] text-sm" />
              </a>
              <ul className="relative left-4 top-0 hidden mt-1 space-y-2  group-hover:text-gray-100 group-hover:block">
                <li>
                  <a
                    href="category/food-powders.html"
                    className="text-gray-500 font-normal"
                  >
                    - Food Powders
                  </a>
                </li>
                <li>
                  <a
                    href="category/earthy-essence.html"
                    className="text-gray-500 font-normal"
                  >
                    - Earthy Essence
                  </a>
                </li>
                <li>
                  <a
                    href="category/sweets.html"
                    className="text-gray-500 font-normal"
                  >
                    - Sweets
                  </a>
                </li>
                <li>
                  <a
                    href="category/sevories.html"
                    className="text-gray-500 font-normal"
                  >
                    - Savouries
                  </a>
                </li>
                <li>
                  <a
                    href="category/pickles.html"
                    className="text-gray-500 font-normal"
                  >
                    - Pickles
                  </a>
                </li>
                <li>
                  <a
                    href="category/dairy.html"
                    className="text-gray-500 font-normal"
                  >
                    - Dairy
                  </a>
                </li>
              </ul>
            </li>
            <li className="relative group right-1 px-2">
              <a
                href="#"
                className="flex items-center text-gray-600 py-1 group-hover:text-green-700 rounded-lg group-hover:bg-gray-200"
              >
                <i className="icofont-bag-alt mr-2 text-xl"></i>
                My Account
                <AiOutlineRight className="ml-[80px] text-sm" />
              </a>
              <ul className="relative left-4 top-0 hidden mt-1 space-y-2  group-hover:text-gray-100 group-hover:block">
                <li>
                  <a href="#" className="text-gray-500 font-normal">
                    - Profile
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 font-normal">
                    - Checkout
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 font-normal">
                    - Order History
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 font-normal">
                    - Order Invoice
                  </a>
                </li>
              </ul>
            </li>
            <li className="hover:bg-green-200  rounded-md p-1">
              <a
                href="pages/about.html"
                className="flex items-center text-gray-600"
              >
                <i className="icofont-info-circle mr-2"></i>About Us
              </a>
            </li>
            <li className="hover:bg-green-200  rounded-md p-1">
              <a
                href="pages/faq.html"
                className="flex items-center text-gray-600"
              >
                <i className="icofont-contacts mr-2"></i>FAQ
              </a>
            </li>
            <li className="hover:bg-green-200  rounded-md p-1">
              <a
                href="pages/policy.html"
                className="flex items-center text-gray-600"
              >
                <i className="icofont-warning mr-2"></i>Policy
              </a>
            </li>
            <li className="hover:bg-green-200  rounded-md p-1">
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
              <i className="icofont-ui-touch-phone mr-2 text-3xl text-green-600"></i>
              <p className="flex flex-col">
                <small>Call Us</small>
                <span className="font-semibold">(+91) 924 - 679 - 9010</span>
              </p>
            </div>
            <div className="flex items-center">
              <i className="icofont-phone mr-2 text-3xl text-green-600"></i>
              <p className="flex flex-col">
                <small>Call Us</small>
                <span className="font-semibold">(+91) 812 - 120 - 1010</span>
              </p>
            </div>
            <div className="flex items-center">
              <i className="icofont-ui-email mr-2 text-3xl text-green-600"></i>
              <p className="flex flex-col">
                <small>Email Us</small>
                <span className="font-semibold">
                  support@srimatreyfoods.com
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="p-4 flex">
          <p className="text-gray-500 flex flex-col m-auto mx-10 text-center justify-center">
            All Rights Reserved by
            <a href="index.html" className="text-green-600">
              Gohona
            </a>
          </p>
        </div>
      </aside>
    </main>
  );
}

export default SideNavbar;
