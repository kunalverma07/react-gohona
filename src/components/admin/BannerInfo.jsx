/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Modal from "./Modal";
import ModalAlert from "./ModalAlert";
import ModalView from "./ModalView";
import BannerForm from "./BannerForm";

import logo from "../../assets/logo/logo.png";
import { useDispatch, useSelector } from "react-redux";
import {
  ResetAllBannerImage,
  getUploadedBanner,
} from "../../redux/slices/BannerSlice";
import { truncate } from "../common/constant";
import { toast } from "react-toastify";

const tableHead = [
  //   {
  //     id: 1,
  //     name: "Serial Number",
  //   },
  {
    id: 2,
    name: "Slider Number",
  },

  {
    id: 4,
    name: "Image Uploaded (Date - DD/MM/YYYY)",
  },
  {
    id: 5,
    name: "Action",
  },
];

const Products = [
  {
    id: 1,
    sliderName: 1,
    imageNumber: "Slider1",
    imageName: "Mango Pickle",
    date: "26-09-2023",
  },
  {
    id: 2,
    sliderName: 2,
    imageNumber: "Slider2",
    imageName: "Til Powder",
    date: "27-09-2023",
  },
  {
    id: 3,
    sliderName: 3,
    imageNumber: "Slider3",
    imageName: "Amla Pickle",
    date: "26-09-2023",
  },
  {
    id: 4,
    sliderName: 4,
    imageNumber: "Slider4",
    imageName: "Dhana Powder",
    date: "29-09-2023",
  },
];

const BannerInfo = () => {
  const [showModal, setShowModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedBanner, setSelectedBanner] = useState();
  const [editViewModal, setEditViewModal] = useState(false);
  const dispatch = useDispatch();

  const bannerData = useSelector((state) => state.bannerSlice);
  const { loading, bannerImages, error, success, message } = bannerData;

  console.log("bannerData", bannerData);

  useEffect(() => {
    dispatch(getUploadedBanner());
  }, []);

  useEffect(() => {
    if (success) {
      toast.success(message || "success", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
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
    }
    setShowModal(false);
    dispatch(ResetAllBannerImage());
    setEditViewModal(false);
    dispatch(getUploadedBanner());
  }, [success, error]);

  const handleDelete = (ban) => {
    setShowModal(true);
    setSelectedBanner(ban);
    // setSelecteProduct(ban);
  };

  const handleView = (ban) => {
    setShowViewModal(true);
    setSelectedBanner(ban);
  };

  console.log("view selected banner is", selectedBanner);

  const editModalHandler = (ban) => {
    setEditViewModal(true);
    setSelectedBanner(ban);
  };

  //   console.log("selectedProduct ===>", selectedProduct);

  return (
    <>
      <div className="table__Container--Outer">
        <table className="table__Container--Inner">
          <thead className="table__Container--Head">
            <tr>
              {tableHead.map((head) => (
                <th key={head.id} scope="col" className="table__Container--Col">
                  {head.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {bannerImages.map((ban) => {
              return (
                <tr
                  className={`${
                    ban.id % 2 === 0
                      ? "table__Body--Row-2"
                      : "table__Body--Row-1"
                  }`}
                  key={ban._id}
                >
                  {/* <th scope="row" className="table__Body--Head">
                    {ban.sliderName}
                  </th> */}
                  <td className="table__Body--Data">{ban?.title}</td>
                  <td className="table__Body--Data">
                    {truncate(ban?.createdAt, 11)}
                  </td>
                  <td className="table__Body--Data">
                    <Link
                      to="#"
                      className="table__Anchor--View"
                      onClick={() => handleView(ban)}
                    >
                      View
                    </Link>

                    <Link
                      to="#"
                      className="table__Anchor--Edit"
                      onClick={() => editModalHandler(ban)}
                    >
                      Edit
                    </Link>
                    <Link
                      to="#"
                      className="table__Anchor--Delete"
                      onClick={() => handleDelete(ban)}
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {showViewModal ? (
          <ModalView
            toggleModal={showViewModal}
            setToggleModal={setShowViewModal}
            data={selectedBanner}
            title="Slider Images"
          >
            <img
              className="h-auto max-w-lg mx-auto"
              src={selectedBanner.image}
              alt="banner info"
            />
          </ModalView>
        ) : (
          ""
        )}

        {editViewModal ? (
          <Modal
            toggleModal={editViewModal}
            setToggleModal={setEditViewModal}
            title="Edit Slider Images"
          >
            <BannerForm />
          </Modal>
        ) : (
          " "
        )}

        {showModal ? (
          <ModalAlert
            toggleModal={showModal}
            setToggleModal={setShowModal}
            bannerId={selectedBanner._id}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default BannerInfo;
