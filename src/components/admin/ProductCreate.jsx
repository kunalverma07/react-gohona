/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { FiFolderPlus } from "react-icons/fi";
import { Modal, ProductCreateForm } from "../index";
import { useDispatch, useSelector } from "react-redux";
import { ResetAllProduct } from "../../redux/slices/ProductSlice";
import { toast } from "react-toastify";

const ProductCreate = () => {
  const dispatch = useDispatch();

  const [createModal, setCreateModal] = useState(false);

  const { createSuccess } = useSelector((state) => state.productSlice);

  const createProductHandler = () => {
    setCreateModal(true);
  };

  console.log("success is", createSuccess);

  useEffect(() => {
    setCreateModal(false);

    if (createSuccess == true) {
      toast.success("Product created successfully", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    dispatch(ResetAllProduct());
  }, [createSuccess]);

  return (
    <>
      <div className="prodcard__Container">
        <div className="prodcard__Block">
          <div
            className="prodcard__Data--BG"
            onClick={() => createProductHandler()}
          >
            <div className="prodcard__Data--IBG">
              <FiFolderPlus className="prodcard__Data--Icon" />
            </div>
            <div className="prodcard__Title--Block">
              <div>
                <h5 className="prodcard__Title--Primary">Create Products</h5>
                <span className="prodcard__Title--Secondary">
                  Add new products
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {createModal ? (
        <Modal
          toggleModal={createModal}
          setToggleModal={setCreateModal}
          title="Create New Product"
        >
          <ProductCreateForm />
        </Modal>
      ) : (
        " "
      )}
    </>
  );
};

export default ProductCreate;
