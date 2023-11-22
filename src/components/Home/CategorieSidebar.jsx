import React, { useState } from "react";
import { FiChevronRight, FiChevronDown } from "react-icons/fi";
import { BiMinus } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { GiBasket, GiCoveredJar, GiMilkCarton, GiPowder } from "react-icons/gi";
import { HiMenuAlt2 } from "react-icons/hi";
import { PiBowlFood, PiGrainsLight } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import {
  handleCategoryToggle,
  setTotal,
} from "../../redux/slices/SidebarSlice";
import product from "../../db/cartProducts.json";

const CategorieSidebar = () => {
  const toggleSidebarState = useSelector((state) => state.toggleSidebar);
  const uniqueSliceState = useSelector((state) => state.UniqueSlice);
  const { categoryIsOpen, total } = toggleSidebarState;
  const { uniqueProd } = uniqueSliceState;
  const [count, setCount] = useState(0);
  const [prodId, setProdId] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  // console.log("prodId ==>", prodId);

  const toggleCategorySidebar = () => {
    dispatch(handleCategoryToggle(!categoryIsOpen));
  };
  console.log("uniqueProd --->", uniqueProd);
  const handleClickPlus = (prod) => {
    setCount(count + 1);
    prod.quantity = prod.quantity + 1;
    prod.totalAmout = prod.price * prod.quantity;

    const total = product.cartProducts.reduce(function (a, b) {
      return { totalAmout: a.totalAmout + b.totalAmout };
    });

    dispatch(setTotal(total));
  };
  // console.log("toggleSidebarState", toggleSidebarState);
  const handleClickMinus = (prod) => {
    setCount(count - 1);
    if (prod.quantity != 0) {
      prod.quantity = prod.quantity - 1;
      prod.totalAmout = prod.price * prod.quantity;
    }
    const total = product.cartProducts.reduce(function (a, b) {
      return { totalAmout: a.totalAmout + b.totalAmout };
    });
    dispatch(setTotal(total));
  };

  return (
    <div className="z-50 w-full h-full">
      <div
        className={`fixed inset-y-0 left-0 w-[300px] h-[110%] bg-white transform ${
          categoryIsOpen ? "translate-x-0" : "translate-x-[-400px]"
        } transition-transform  z-20 border ease-in-out duration-300 overflow-y-hidden`}
      >
        <div className="flex text-[#199a4a] overflow-y-hidden overflow-x-hidden font-semibold text-lg border-b-[1px] border-gray-400   justify-start gap-1 py-3">
          <button
            className={`${
              categoryIsOpen ? "translate-x-[-110px]" : "translate-x-80"
            }  p-2 w-8   rounded-full relative left-3`}
            onClick={() => toggleCategorySidebar()}
          >
            <div className="p-2 px-4 rounded-full   text-gray-600 z-[100] border hover:bg-green-500 hover:text-white relative  left-[345px] ">
              <RxCross2 className=" relative text-md font-extrabold right-[9px]" />
            </div>
          </button>
          <div className="flex relative right-6">
            <HiMenuAlt2 className="mt-2.5 text-3xl" />
            <span className="text-2xl mt-2.5">Categories</span>
          </div>
        </div>
        <div className="flex overflow-y-scroll mb-8 max-h-[90%] flex-col justify-start">
          {/* one */}
          {uniqueProd &&
            uniqueProd.map((prod, id) => {
              return (
                <>
                  <div
                    onClick={() => {
                      setIsOpen(true);
                      setProdId(id);
                    }}
                    className={`${
                      prodId === id && isOpen ? "text-green-500" : ""
                    } hover:bg-gray-100 text-gray-600 border-b-[0.5px]  border-gray-300 flex px-4 hover:text-green-500 cursor-pointer  py-3 justify-between mx-3 m-auto`}
                  >
                    <span className="flex gap-3">
                      <GiPowder className="inline  text-2xl" />
                      <p className="text-[17px]">{prod.category}</p>
                    </span>
                    {prodId == id && isOpen ? (
                      <FiChevronDown className="inline relative right-0 top-1" />
                    ) : (
                      <FiChevronRight className="inline relative right-3.5 top-1" />
                    )}
                  </div>
                  <div
                    className={`${
                      prodId == id && isOpen ? "block" : "hidden"
                    } p-1 flex flex-col ml-6 mr-16`}
                  >
                    {prod.arr.map((elem) => (
                      <span className="text-gray-600 px-4 hover:text-green-500 cursor-pointer rounded-lg py-1.5 hover:bg-gray-100">
                        <BiMinus className="inline" /> {elem.name}
                      </span>
                    ))}
                  </div>
                </>
              );
            })}
        </div>
        <div className="absolute bottom-8 bg-slate-100 h-20 w-full flex text-white justify-start px-3 ">
          <p>
            <span className="text-gray-500 pr-1"> All Rights Reserved by</span>
            <span className="text-green-500">Gohona</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategorieSidebar;
