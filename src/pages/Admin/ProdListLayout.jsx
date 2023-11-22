/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Sidebar, ProductList } from "../../components/index";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/slices/ProductSlice";

const ProdListLayout = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="admin w-screen h-screen bg-gray-100 flex flex-grow overflow-y-scroll">
        <Sidebar />
        <div className={`flex-1 bg-gray-100`}>
          <ProductList />
        </div>
      </div>
    </>
  );
};

export default ProdListLayout;
