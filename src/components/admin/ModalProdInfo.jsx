/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { FiX } from "react-icons/fi";

const ModalProdInfo = ({ setViewProdModal, children }) => {
  return (
    <>
      <div className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
        <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
          <button
            type="button"
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
            onClick={() => setViewProdModal(false)}
          >
            <span className="sr-only">Close</span>
            <FiX className="h-6 w-6" aria-hidden="true" />
          </button>
          {children}
        </div>
      </div>
    </>
  );
};

export default ModalProdInfo;
