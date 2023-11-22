import React, { useEffect, useState } from "react";
import prodDetailImg from "../../assets/img/product-5.png";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsFillBasket2Fill } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { handleCart, handleCartRemove } from "../../redux/slices/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { setTotal } from "../../redux/slices/SidebarSlice";

const ProductModal = ({ isOpen, onClose, data }) => {
  const modalClasses = isOpen ? "block" : "hidden";
  const cartState = useSelector((state) => state.CartSlice);
  const [count, setCount] = useState(0);
  const [tAmount, setTAmount] = useState(0);
  const dispatch = useDispatch();
  const { cart } = cartState;
  const [index, setIndex] = useState(0);

  const myData = {
    ...data,
    quantity: count,
    totalAmount: tAmount,
  };

  console.log("myData --->", myData);
  // console.log("myData-->", myData);
  // console.log("cart2 ==>", cart);

  const amount = cart.filter((prod) => prod._id == data._id);

  // console.log("amount ==>", amount);
  const uniqueIds = new Set();
  const uniqueCart = cart.filter((item) => {
    if (!uniqueIds.has(item._id)) {
      uniqueIds.add(item._id);
      return true;
    }
    return false;
  });
  console.log("uniqueCart3-------->", uniqueCart);
  const handleAddToCart = (prod) => {
    if (prod.id != 0 && count != 0) {
      dispatch(handleCart(prod));
      setCount(0);
      const total = uniqueCart.reduce(function (a, b) {
        return { totalAmount: a.totalAmount + b.totalAmount };
      });

      dispatch(setTotal(total));
    }
  };

  const handleClickPlus = (prod) => {
    // console.log("prod --- ===>", prod);
    if (prod.id != 0) {
      setCount(count + 1);
      prod.quantity = prod.quantity + 1;
      setTAmount(prod.price * prod.quantity);
    }
  };

  const handleClickMinus = (prod) => {
    if (prod.quantity != 0) {
      setCount(count - 1);
      prod.quantity = prod.quantity - 1;
      setTAmount(prod.price * prod.quantity);
    }
  };

  // console.log("myData ----->", myData);
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${modalClasses}`}
    >
      <div
        onClick={onClose}
        className="fixed inset-0 overflow-y-scroll   bg-black opacity-50"
      ></div>
      <div className=" md:h-11/12 w-11/12 mb-36 p-0 rounded-lg md:w-1/2 sm:w-9/12  z-10">
        <div className="bg-[#f5f6f7] shadow-md rounded-md  m-auto mt-[129px] ">
          <section className="hidden md:flex bg-gradient-to-r rounded-t-md from-[#a8dbbb] to-[#4f5a6d]  p-4 flex-col md:text-center md:justify-center text-white w-full">
            <h2 className="text-2xl  font-medium">{myData.name}</h2>
            <p className="text-md mt-4">
              Home / {myData.category} / {myData.name}
            </p>
          </section>
          <section className="flex lg:flex-row flex-col my-2 gap-5  container m-auto w-full">
            <div className="flex flex-col gap-3 h-1/3">
              <img
                src={
                  myData?.image != []
                    ? myData?.image?.images[index]
                    : prodDetailImg
                }
                alt="prodDetailImg"
                className="rounded-lg m-3 h-[200px] object-cover  md:h-[300px] md:w-[350px]"
              />
              <div className="flex flex-row">
                {myData?.image?.images.map((img, index) => {
                  return (
                    <img
                      onClick={() => setIndex(index)}
                      src={img}
                      alt="prodDetailSmImg "
                      className="h-20 w-20 cursor-pointer lg:relative lg:bottom-2.5 rounded-lg m-auto"
                    />
                  );
                })}
              </div>
            </div>
            <div className=" flex-1">
              <div className="bg-white rounded-lg flex flex-col gap-1 lg:gap-4 p-4 lg:p-8 h-8/12 ">
                <h2 className="hover:text-green-500 text-gray-700 text-2xl font-medium cursor-pointer">
                  {myData.name}
                </h2>
                {/* <h5 className="hover:text-green-500 cursor-pointer text-xs text-gray-600">
                  SKU:1234567 &emsp; BRAND:Gohona
                </h5> */}
                <h2 className="hover:text-green-500  cursor-pointer text-green-500 ">
                  <strong className="text-xl">₹ {myData.price}</strong>
                  <span className="text-xs font-medium"></span>
                </h2>
                <h2 className=" cursor-pointer text-gray-600 ">
                  <span className="text-md"> {myData.description}</span>
                </h2>
                <button className="flex align-middle mt-1">
                  <AiOutlineMinus
                    onClick={() => handleClickMinus(myData)}
                    className="mt-1.5 w-[40px] p-2  h-[40px] hover:text-white bg-gray-100 relative  bottom-[5px] hover:bg-green-500  rounded-md m-2 cursor-pointer"
                  />
                  <div className="bg-green-500  w-full max-w-[400px] rounded-md">
                    <input
                      placeholder=""
                      className=" text-center h-10 w-16 border-0 focus:ring-0 bg-green-500 text-white rounded-md"
                      type="text"
                      value={myData.quantity}
                    />
                  </div>
                  <AiOutlinePlus
                    onClick={() => handleClickPlus(myData)}
                    className="mt-1.5 w-[40px] p-2  h-[40px] hover:text-white bg-gray-100 relative  bottom-[5px] hover:bg-green-500  rounded-md m-2 cursor-pointer"
                  />
                </button>
                <button
                  onClick={() => handleAddToCart(myData)}
                  className="md:px-0  w-9/12 m-auto  text-md md:text-[14px] p-2 md:py-1.5 text-white transition ease-in-out  hover:bg-green-600  rounded-md bg-green-500"
                >
                  <BsFillBasket2Fill className="inline mx-0  relative bottom-1" />
                  Add To Cart
                </button>
              </div>
            </div>
          </section>
          <div>
            <div className="flex text-2xl text-gray-800  justify-end ">
              <button
                type="button"
                onClick={onClose}
                class=" text-white bg-gray-600 hover:bg-gray-700  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
