/* eslint-disable no-unused-vars */
import React from "react";
import {
  FaCcDiscover,
  FaCcMastercard,
  FaCcVisa,
  FaFacebookF,
  FaGooglePay,
  FaInstagram,
  FaMobileAlt,
} from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { ImLocation } from "react-icons/im";
import logo from "../../assets/logo/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer__Container">
      <div className="footer__Screen">
        <div className="footer__Grids">
          <div>
            <h2 className="mb-6 text-sm font-semibold cursor-pointer text-gray-900 uppercase ">
              <Link to="/">
                <img src={logo} className="h-44 ml-2" alt="logo" />
              </Link>
            </h2>
            <ul className="text-gray-500  text-lg">
              <li className="mb-4">
                Srimatrey has embarked the taste of Indian households with the
                flavor of South. A legacy that is built with honesty and by
                sustaining the balance of natural flavors.
              </li>
              <li className="mb-4 text-green-500 flex mt-8">
                <a
                  href="https://www.facebook.com/SriMatrey"
                  className=" p-3 hover:bg-green-500  hover:text-white transition duration-300 ease-in-out bg-white mr-2 shadow-md rounded-full"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.instagram.com/srimatrey/?igshid=ZDdkNTZiNTM%3D"
                  className=" p-3 hover:bg-green-500  hover:text-white transition duration-300 ease-in-out bg-white mr-2 shadow-md rounded-full"
                >
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-xl  font-semibold text-gray-900 uppercase ">
              Contact Us
            </h2>
            <ul className="text-gray-500  ">
              <li className="mb-4 text-lg text-start align-middle flex gap-4">
                <span className="text-3xl font-medium text-[#119744] ">@</span>
                <p> support@gohona.com</p>
              </li>
              <li className="mb-4 text-lg text-start align-middle flex gap-4">
                <span className="text-3xl font-medium">
                  <IoMdCall className="text-[#119744]" />
                </span>
                <p> (+91) 8876140199</p>
              </li>
              <li className="mb-4 text-lg text-start align-middle flex gap-4">
                <span className="text-3xl font-medium">
                  <FaMobileAlt className="text-[#119744]" />
                </span>
                <p> (+91) 8876140199</p>
              </li>
              <li className="mb-4 text-lg text-start align-middle flex gap-4">
                <span className="text-3xl font-medium">
                  <ImLocation className="text-[#119744]" />
                </span>
                <p>Jalukbari, Guwahati - 781013 </p>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-xl font-semibold text-gray-900 uppercase ">
              Quick Links
            </h2>
            <ul className="text-gray-500 text-lg ">
              <li className="mb-4 ">
                <a
                  href="#"
                  className="hover:underline hover:text-green-500 transition duration-300 ease-in-out "
                >
                  Best Sellers
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="#"
                  className="hover:underline hover:text-green-500 transition duration-300 ease-in-out "
                >
                  New Arrivals
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-4 py-4 text-4xl  bg-[#119744] rounded-md md:flex md:items-center md:justify-between">
          <span className=" text-white text-lg flex justify-center text-center sm:text-center">
            © All Copyrights Reserved by Gohona.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
