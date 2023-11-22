/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { ProductMultiImg, ProductImgView } from "../index";
import { FiAperture } from "react-icons/fi";
import Modal from "../admin/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  ResetAllUploadImage,
  getUploadedImage,
} from "../../redux/slices/ImageSlice";
import { toast } from "react-toastify";

const ProdImages = () => {
  const [viewModal, setViewModal] = useState(false);
  const [viewImgModal, setViewImgModal] = useState(false);
  const [selectedProduct, setSelecteProduct] = useState({});

  const modalHandler = (img) => {
    setViewModal(true);
    setSelecteProduct(img);
  };

  const modalViewHandler = () => {
    setViewImgModal(true);
  };

  const dispatch = useDispatch();

  const imageData = useSelector((state) => state.uploadImageSlice);
  const { loading, uploadedImages, error, imgsuccess, imgValid } = imageData;

  useEffect(() => {
    dispatch(getUploadedImage());
  }, []);

  useEffect(() => {
    setViewModal(false);

    if (error) {
      toast.error(error, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (imgsuccess) {
      toast.success("Image uploaded successfully", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (imgValid) {
      toast.error("Image type is not valid", {
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

    dispatch(ResetAllUploadImage());
  }, [imgsuccess, error]);

  console.log("success is", imgsuccess);
  console.log("error is", error);
  console.log("imgValid is", imgValid);

  return (
    <>
      <div className="prodcard__Container">
        <div className="prodcard__Block">
          <div className="prodcard__Data--BG" onClick={() => modalHandler()}>
            <div className="prodcard__Data--IBG">
              <FiAperture className="prodcard__Data--Icon" />
            </div>
            <div className="prodcard__Title--Block">
              <div>
                <h5 className="prodcard__Title--Primary">Upload Images</h5>
                <span className="prodcard__Title--Secondary">
                  Can create a collection of images.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="prodcard__Block">
          <div
            className="prodcard__Data--BG"
            onClick={() => modalViewHandler()}
          >
            <div className="prodcard__Data--IBG">
              <FiAperture className="prodcard__Data--Icon" />
            </div>
            <div className="prodcard__Title--Block">
              <div>
                <h5 className="prodcard__Title--Primary">
                  View Uploaded Images
                </h5>
                <span className="prodcard__Title--Secondary">
                  View collection of images.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {viewModal ? (
        <Modal
          toggleModal={viewModal}
          setToggleModal={setViewModal}
          data={selectedProduct}
          title="Upload Product Images"
        >
          <ProductMultiImg />
        </Modal>
      ) : (
        ""
      )}

      {viewImgModal ? (
        <>
          <Modal
            toggleModal={viewImgModal}
            setToggleModal={setViewImgModal}
            data={selectedProduct}
            title="View Images"
          >
            <ProductImgView />
          </Modal>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default ProdImages;
