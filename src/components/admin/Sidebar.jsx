/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiHome,
  FiImage,
  FiAperture,
  FiServer,
  FiShoppingBag,
  FiGlobe,
} from "react-icons/fi";
import Usermenu from "./Usermenu";
import logo from "../../assets/logo/logo.png";
import { useSelector } from "react-redux";

const Menus = [
  {
    id: 1,
    title: "Dashboard",
    path: "/admin/dashboard/",
    icon: <FiHome />,
  },
  {
    id: 2,
    title: "Banner",
    path: "/admin/banner/",
    icon: <FiImage />,
  },
  {
    id: 3,
    title: "Product Images",
    path: "/admin/product/images/",
    icon: <FiAperture />,
  },
  {
    id: 4,
    title: "Product List",
    path: "/admin/products/list/",
    icon: <FiServer />,
  },
  {
    id: 5,
    title: "Orders",
    path: "/admin/orders/list/",
    icon: <FiShoppingBag />,
  },
  // {
  //   id: 6,
  //   title: "Social Links",
  //   path: "/admin/social/links/",
  //   icon: <FiGlobe />,
  // },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div
        className={`sidebar__Container--Main ${
          isOpen
            ? "sidebar__Container--1"
            : "sidebar__Container--2"
        }`}
      >
        <div className="sidebar__Block">
          <div className="sidebar__Menu--Container">
            <div className="sidebar__Menu--Box">
              <span className="sidebar__Menu--ImgBlock">
                <img
                  src={logo}
                  className="sidebar__Menu--Img"
                  alt="logo srimatreyfoods"
                  onClick={() => setIsOpen(!isOpen)}
                />
              </span>
              <h4 className="sidebar__Menu--Title">
                Gohona
              </h4>
            </div>
            <Usermenu />
          </div>
          <ul className="sidebar__Menu--Optn">
            {Menus.map((menu) => {
              return (
                <div key={menu.id}>
                  <Link to={menu.path}>
                    <li
                      key={menu.id}
                      className="sidebar__Menu--List"
                    >
                      <span className="sidebar__Menu--List-IBlock">
                        <p className="sidebar__Menu--List-Icon">{menu.icon}</p>
                      </span>
                      {menu.title}
                    </li>
                  </Link>
                  {menu.isOptionsOpen && menu.options != [] ? (
                    <span className="sidebar__Menu--List-Title">
                      {menu.options.map((option, index) => (
                        <li
                          key={index}
                          className="sidebar__Menu--List-Optns"
                        >
                          {option}
                        </li>
                      ))}
                    </span>
                  ) : null}
                </div>
              );
            })}
          </ul>
        </div>
      </div>
      {isOpen ? (
        ""
      ) : (
        <div className="sidebar__MobileMenu--Container">
          <div className="sidebar__MobileMenu--Block">
            <img
              src={logo}
              onClick={() => setIsOpen(!isOpen)}
              className="sidebar__MobileMenu--Logo"
              alt="logo srimatreyfoods"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
