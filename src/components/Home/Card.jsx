/* eslint-disable no-unused-vars */
import React from "react";
import prodImg from "../../assets/img/product-5.png";
import { BsFillBasket2Fill } from "react-icons/bs";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Card = () => {
  return (
    <div className="card__Container">
      <div className="card__Block">
        <div className="card__Img--Block">
          <img src={prodImg} alt="prodImg" className="card__Img--Content" />
        </div>
        <div className="card__Content--Block">
          <h3 className="card__Content--Title">
            Green Chilli Pickle
          </h3>
          <h3 className="card__Content--SubTitle">
            ₹<strong>500</strong>
          </h3>
          <button type="button" className="card__Content--Btn">
            <BsFillBasket2Fill className="card__Content--Btn_Icon" />
            Add
          </button>
          <div className="flex align-middle">
            <AiOutlineMinus
              // onClick={() => handleClickMinus(prod)}
              className="mt-1.5 w-[30px] p-1.5  h-[30px] hover:text-white bg-gray-100 hover:bg-green-500  rounded-md m-2 cursor-pointer"
            />
            <input
              placeholder=""
              // value={prod?.quantity}
              className="w-[52px] text-center relative top-1.5  h-8 border-0 focus:ring-0 bg-gray-100 rounded-md"
              type="text"
            />
            <AiOutlinePlus
              // onClick={() => handleClickPlus(prod)}
              className="mt-1.5 w-[30px] p-1.5  h-[30px] bg-gray-100 hover:text-white hover:bg-green-500  rounded-md m-2 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
