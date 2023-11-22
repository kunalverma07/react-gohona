/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { BsFillBasket2Fill } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import ProdImg from "../../assets/img/product-5.png";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { handleCartToggle, setTotal } from "../../redux/slices/SidebarSlice";
import {
  handleCart,
  handleCartRemove,
  handlePlus,
  handleProdDelete,
} from "../../redux/slices/CartSlice";
import product from "../../db/cartProducts.json";
import { Link } from "react-router-dom";
import Modal from "../admin/Modal";
import { MdDelete } from "react-icons/md";

const CartSidebar = () => {
  const toggleSidebarState = useSelector((state) => state.toggleSidebar);
  const cartState = useSelector((state) => state.CartSlice);
  // const { cart } = cartState;
  const { cartIsOpen, total } = toggleSidebarState;
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isClicked1, setIsClicked1] = useState(false);
  const iconColor = isClicked || isHovered ? "text-white" : "text-green-500";
  const iconColor1 = isClicked1 || isHovered1 ? "text-white" : "text-red-500";
  const [count, setCount] = useState(0);
  // const [totalAmount, setTotalNew] = useState([]);
  const dispatch = useDispatch();
  const [toggleModal, setToggleModal] = useState(false);

  const cart = JSON.parse(localStorage.getItem("cartData"));

  const uniqueIds = new Set();
  const uniqueCart = cart?.filter((item) => {
    if (!uniqueIds.has(item._id)) {
      uniqueIds.add(item._id);
      return true;
    }
    return false;
  });
  const toggleCartSidebar = () => {
    dispatch(handleCartToggle(!cartIsOpen));
  };

  // console.log("uniqueCart -------->", uniqueCart);
  // dispatch(setTotal(total));

  const handleClickPlus = (prod) => {
    setCount(count + 1);
    dispatch(handlePlus(prod));
    // console.log("prod ==>", prod);
  };

  const handleClickMinus = (prod) => {
    setCount(count - 1);
    dispatch(handleCartRemove(prod));
  };

  // useEffect(() => {
  //   dispatch(setTotal(total));
  // }, []);

  const totalAmount = uniqueCart?.reduce(
    (accumulator, currentValue) => accumulator + currentValue.totalAmount,
    0
  );
  // console.log("totalAmount --->", totalAmount);

  dispatch(setTotal(totalAmount));
  return (
    <div className="cart__Container--1">
      <div
        className={`fixed inset-y-0 right-0  w-[359px] h-[110%] bg-white transform ${
          cartIsOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform z-40 border ease-in-out duration-300 overflow-y-auto`}
      >
        <div className="flex text-[#199a4a] font-semibold text-lg border-b-[1px] border-gray-400   justify-center py-3">
          <button
            className={`${
              cartIsOpen ? "cart__Open--Btn-2" : "cart__Open--Btn-3"
            }  cart__Open--Btn-1`}
            onClick={() => toggleCartSidebar()}
          >
            <RxCross2 className="cart__Open--Btn-Icon" />
          </button>
          <BsFillBasket2Fill className="cart__Open--Icon" />
          <span> Total Item({uniqueCart?.length})</span>
        </div>
        <div className="cart__Content--Block">
          {uniqueCart?.length > 0 ? (
            uniqueCart.map((prod) => (
              <div className=" grid grid-cols-8 p-4 gap-2" key={prod?.id}>
                <img
                  src={prod.image.images[0]}
                  alt=""
                  className="w-20 h-[83%] object-cover rounded-md col-span-2"
                />
                <div className="flex relative bottom-1.5 left-3 flex-col gap-0.5 col-span-4">
                  <h4>{prod?.name}</h4>
                  <h5>Unit Price - ₹{prod?.price}</h5>
                  <div className="flex align-middle">
                    <AiOutlineMinus
                      onClick={() => handleClickMinus(prod)}
                      className="mt-1.5 w-[30px] p-1.5  h-[30px] hover:text-white bg-gray-100 hover:bg-green-500  rounded-md m-2 cursor-pointer"
                    />
                    <input
                      placeholder=""
                      value={prod?.quantity}
                      className="w-[52px] text-center relative top-1.5  h-8 border-0 focus:ring-0 bg-gray-100 rounded-md"
                      type="text"
                    />
                    <AiOutlinePlus
                      onClick={() => handleClickPlus(prod)}
                      className="mt-1.5 w-[30px] p-1.5  h-[30px] bg-gray-100 hover:text-white hover:bg-green-500  rounded-md m-2 cursor-pointer"
                    />
                  </div>
                </div>
                <div className="flex flex-col relative bottom-0.5 justify-center gap-3.5 items-end col-span-2">
                  <span className="pl-10 pr-3 relative right-1 font-semibold text-green-500">
                    ₹{prod?.totalAmount}
                  </span>
                  <div className=" flex justify-end  items-end col-span-2">
                    <div
                      onClick={() => {
                        dispatch(handleProdDelete(prod));
                        setIsClicked1(true);
                      }}
                      className={`p-2 w-8 relative top-0.5 right-4 bg-gray-100 cursor-pointer hover:text-green-100 hover:bg-red-100 rounded-md ${
                        isHovered ? "hover:text-white" : ""
                      }`}
                      onMouseEnter={() => setIsHovered1(true)}
                      onMouseLeave={() => setIsHovered1(false)}
                    >
                      <div className={`child ${iconColor1}`}>
                        <MdDelete
                          className={`text-xl relative right-0.5 ${
                            isHovered ? "text-green-400" : "text-red-500"
                          } text-current `}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex justify-center">
              <span className="text-lg text-gray-500">Cart is Empty</span>
            </div>
          )}
        </div>
        <div className=" flex text-white justify-center border-t-[1px] border-gray-400">
          {uniqueCart?.length > 0 ? (
            <Link
              to="/checkout"
              onClick={() => {
                if (uniqueCart?.length > 0) {
                  toggleCartSidebar();
                } else {
                  setToggleModal(true);
                }
              }}
            >
              <button className="bg-green-500  hover:bg-gray-600 mx-8 py-3 w-11/12  my-4 rounded-lg">
                Proceed To Checkout &emsp; | &ensp; ₹{totalAmount}
              </button>
            </Link>
          ) : (
            <Link
              to="/"
              onClick={() => {
                if (uniqueCart?.length > 0) {
                  toggleCartSidebar();
                } else {
                  setToggleModal(true);
                }
              }}
            >
              <button className="bg-green-500  hover:bg-gray-600 mx-8 py-3 w-11/12  my-4 rounded-lg">
                Proceed To Checkout &emsp; | &ensp; ₹{totalAmount}
              </button>
            </Link>
          )}
        </div>
      </div>

      <Modal
        toggleModal={toggleModal}
        setToggleModal={setToggleModal}
        title="Hello"
        children="Please add product to cart"
      />
    </div>
  );
};

export default CartSidebar;
