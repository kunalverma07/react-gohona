import React from "react";
import { BsBasket2Fill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { TfiMenuAlt } from "react-icons/tfi";
import { useDispatch, useSelector } from "react-redux";
import {
  handleCartToggle,
  handleCategoryToggle,
} from "../../redux/slices/SidebarSlice";

const MobileFooter = () => {
  const toggleSidebarState = useSelector((state) => state.toggleSidebar);
  const { cartIsOpen, categoryIsOpen } = toggleSidebarState;
  const dispatch = useDispatch();

  const toggleCartSidebar = () => {
    dispatch(handleCartToggle(!cartIsOpen));
  };
  const toggleCategorySidebar = () => {
    dispatch(handleCategoryToggle(!categoryIsOpen));
  };

  return (
    <footer className="py-4 sm:px-0 px-6  fixed bottom-0 bg-white w-full shadow-lg">
      <div className="container m-auto flex gap-2 justify-between">
        <div className="flex flex-col hover:text-green-500  ">
          <FaHome className="text-xl  m-auto hover:text-green-500 text-center text-gray-600" />
          <span className="text-xs">HOME</span>
        </div>
        <div
          className="flex flex-col hover:text-green-500"
          onClick={() => toggleCategorySidebar()}
        >
          <TfiMenuAlt className="text-xl  m-auto hover:text-green-500 text-gray-600" />
          <span className="text-xs  ">CATEGORY</span>
        </div>
        <div
          className="flex flex-col hover:text-green-500"
          onClick={() => toggleCartSidebar()}
        >
          <BsBasket2Fill className="text-xl  m-auto hover:text-green-500 text-gray-600" />
          <span className="text-xs  ">CARTLIST</span>
        </div>
      </div>
    </footer>
  );
};

export default MobileFooter;
