/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { FiImage, FiAperture, FiServer, FiShoppingBag } from "react-icons/fi";

const dataMenu = [
  {
    id: 1,
    content: "Banner",
    desc: "Can Upload Images in Slider.",
    icon: <FiImage className="content__Card--Icon-1" />,
    navigate: "/admin/banner/",
  },
  {
    id: 2,
    content: "Product Images",
    desc: "Can Upload Images for Products.",
    icon: <FiAperture className="content__Card--Icon-1" />,
    navigate: "/admin/product/images/",
  },
  {
    id: 3,
    content: "Product List",
    desc: "Create New Products and Update.",
    icon: <FiServer className="content__Card--Icon-1" />,
    navigate: "/admin/products/list/",
  },
  {
    id: 4,
    content: "Orders",
    desc: "To Check New and Old orders.",
    icon: <FiShoppingBag className="content__Card--Icon-1" />,
    navigate: "/admin/orders/list/",
  },
];

const Content = () => {
  return (
    <>
      <div className="content__Container">
        {dataMenu.map((data) => (
          <div key={data.id} className="content__Card">
            <Link to={data.navigate}>
              <div className="content__Card--Block">
                <div className="content__Card--Icon">{data.icon}</div>
                <div className="content__Card--Heading">
                  <div>
                    <h5 className="content__Card--Heading-Primary">
                      {data.content}
                    </h5>
                    <span className="content__Card--Heading-Secondary">
                      {data.desc}
                    </span>
                  </div>
                  <div className="content__Card--Anchor-Block">
                    <button className="content__Card--Anchor-Btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-current m-auto"
                      >
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Content;
