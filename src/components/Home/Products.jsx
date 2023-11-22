/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import SideNavbar from "./SideNavbar";
import prodDetailImg from "../../assets/img/product-5.png";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Products = () => {
  return (
    <div className="bg-[#f5f6f7]  ">
      <Navbar />
      <div className="bg-[#f5f6f7]   m-auto mt-[129px] ">
        <section className="bg-gradient-to-r from-[#a8dbbb] to-[#4f5a6d]  p-24 flex-col text-center flex justify-center text-white w-full">
          <h2 className="text-4xl font-medium">TOMATO PICKLE</h2>
          <p className="text-lg mt-4">Home / Pickles / Tomato Pickle</p>
        </section>
        <section className="flex lg:flex-row flex-col my-20 gap-5 container m-auto w-full">
          <div className="flex flex-col gap-3">
            <img
              src={prodDetailImg}
              alt="prodDetailImg"
              className="rounded-lg m-3"
            />
            <img
              src={prodDetailImg}
              alt="prodDetailSmImg"
              className="h-20 w-20 rounded-lg m-auto"
            />
          </div>
          <div className=" flex-1">
            <div className="bg-white rounded-lg flex flex-col gap-4 p-8 h-1/2 ">
              <h2 className="hover:text-green-500 text-2xl font-medium cursor-pointer">
                Tomato Pickle
              </h2>
              <h5 className="hover:text-green-500 cursor-pointer text-xs text-gray-600">
                SKU:1234567 &emsp; BRAND:Gohona
              </h5>
              <h2 className="hover:text-green-500  cursor-pointer text-green-500 ">
                <strong className="text-xl">₹ 500</strong>
                <span className="text-xs font-medium"> /KG</span>
              </h2>
              <button className="flex align-middle mt-6">
                <AiOutlineMinus className="mt-1.5  rounded-md m-2 cursor-pointer" />
                <div className="bg-green-500 w-full max-w-[400px] rounded-md">
                  <input
                    placeholder=""
                    className=" h-8 w-16 border-0 focus:ring-0 bg-green-500 text-white rounded-md"
                    type="text"
                  />
                </div>
                <AiOutlinePlus className="mt-1.5 rounded-md m-2 cursor-pointer" />
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <SideNavbar />
    </div>
  );
};

export default Products;
