import React, { useState } from "react";
import { deleteProduct } from "../../redux/slices/ProductSlice";
import { useDispatch } from "react-redux";
import { deleteBanner } from "../../redux/slices/BannerSlice";

const ModalAlert = ({ toggleModal, setToggleModal, prodId, bannerId }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (prodId) {
      dispatch(deleteProduct(prodId));
    } else if (bannerId) {
      dispatch(deleteBanner(bannerId));
    }
  };

  return (
    <div
      // id="popup-modal"
      tabIndex="-1"
      className={`fixed top-0 flex justify-center items-center h-screen left-0 right-0 z-50 ${
        toggleModal ? "block" : "hidden"
      } p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}
      // onClick={() => setToggleModal(false)}
    >
      <div className="relative w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="p-6 text-center">
            <svg
              className="mx-auto mb-4 text-red-600 w-12 h-12 dark:text-red-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this product?
            </h3>
            <button
              // data-modal-hide="popup-modal"
              type="button"
              className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
              onClick={handleDelete}
              // onClick={() => setToggleModal(false)}
            >
              Yes
            </button>
            <button
              // data-modal-hide="popup-modal"
              type="button"
              className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              onClick={() => setToggleModal(false)}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAlert;
