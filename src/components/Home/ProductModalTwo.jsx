import React, { useState } from "react";
import prodDetailImg from "../../assets/img/product-5.png";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { handleCart } from "../../redux/slices/CartSlice";

const ProductModalTwo = ({ isOpen, onClose, data }) => {
  const modalClasses = isOpen ? "block" : "hidden";
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  console.log(data);

  const handleClickPlus = (prod) => {
    setCount(count + 1);
    prod.quantity = prod.quantity + 1;
    prod.totalAmout = prod.price * prod.quantity;
    // dispatch(handleCart(prod));
  };

  const handleClickMinus = (prod) => {
    setCount(count - 1);
    if (prod.quantity != 0) {
      prod.quantity = prod.quantity - 1;
      prod.totalAmout = prod.price * prod.quantity;
    }
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${modalClasses}`}
    >
      <div
        onClick={onClose}
        className="fixed inset-0   bg-black opacity-50"
      ></div>
      <div className=" md:h-11/12 mb-36 p-0  rounded-lg md:w-1/2  z-10">
        <div className="bg-[#f5f6f7] shadow-md rounded-md  m-auto mt-[129px] ">
          <div className="flex text-2xl text-gray-800  justify-end ">
            <RxCross2 onClick={onClose} className="cursor-pointer" />
          </div>
          <section className="bg-gradient-to-r from-[#a8dbbb] to-[#4f5a6d]  p-4 flex-col text-center flex justify-center text-white w-full">
            <h2 className="text-2xl  font-medium">{data.name}</h2>
            <p className="text-md mt-4">Home / Pickles / {data.name}</p>
          </section>
          <section className="flex lg:flex-row flex-col my-2 gap-5  container m-auto w-full">
            <div className="flex flex-col gap-3 h-1/3">
              <img
                src={prodDetailImg}
                alt="prodDetailImg"
                className="rounded-lg m-3 h-[200px]  md:h-[300px]"
              />
              <div className="flex gap-2 mx-4">
                <img
                  src={prodDetailImg}
                  alt="prodDetailSmImg"
                  className="h-16 w-16 lg:relative lg:bottom-2.5 rounded-lg m-auto"
                />
                <img
                  src={prodDetailImg}
                  alt="prodDetailSmImg"
                  className="h-16 w-16 lg:relative lg:bottom-2.5 rounded-lg m-auto"
                />
                <img
                  src={prodDetailImg}
                  alt="prodDetailSmImg"
                  className="h-16 w-16 lg:relative lg:bottom-2.5 rounded-lg m-auto"
                />
                <img
                  src={prodDetailImg}
                  alt="prodDetailSmImg"
                  className="h-16 w-16 lg:relative lg:bottom-2.5 rounded-lg m-auto"
                />
                <img
                  src={prodDetailImg}
                  alt="prodDetailSmImg"
                  className="h-16 w-16 lg:relative lg:bottom-2.5 rounded-lg m-auto"
                />
              </div>
            </div>
            <div className=" flex-1">
              <div className="bg-white rounded-lg flex flex-col gap-2 lg:gap-4 p-4 lg:p-8 h-8/12 ">
                <h2 className="hover:text-green-500 text-gray-700 text-2xl font-medium cursor-pointer">
                  {data.title}
                </h2>
                <h5 className="hover:text-green-500 cursor-pointer text-xs text-gray-600">
                  SKU:1234567 &emsp; BRAND:Gohona
                </h5>
                <h2 className="hover:text-green-500  cursor-pointer text-green-500 ">
                  <strong className="text-xl">₹ {data.price}</strong>
                  <span className="text-xs font-medium"></span>
                </h2>
                <button className="flex align-middle mt-6">
                  <AiOutlineMinus
                    onClick={() => handleClickMinus(data)}
                    className="mt-1.5 w-[30px] p-1.5  h-[30px] hover:text-white bg-gray-100 relative  bottom-[5px] hover:bg-green-500  rounded-md m-2 cursor-pointer"
                  />
                  <div className="bg-green-500 w-full max-w-[400px] rounded-md">
                    <input
                      placeholder=""
                      className=" text-center h-8 w-16 border-0 focus:ring-0 bg-green-500 text-white rounded-md"
                      type="text"
                      value={data.quantity}
                    />
                  </div>
                  <AiOutlinePlus
                    onClick={() => handleClickPlus(data)}
                    className="mt-1.5 w-[30px] p-1.5  h-[30px] bg-gray-100 hover:text-white relative bottom-[5px] hover:bg-green-500  rounded-md m-2 cursor-pointer"
                  />
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProductModalTwo;
