/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FiImage } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { uploadImage } from "../../redux/slices/ImageSlice";

const ProductMultiImg = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [files, setFiles] = useState([]);

  // console.log("title is", title);
  // console.log("files is", files);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("clicked");

    // Check if there are files to upload
    if (files.length === 0) {
      alert("Please select at least one image to upload.");
      return;
    }

    const formData = new FormData();

    formData.append("name", title);

    for (let i = 0; i < files.length; i++) {
      formData.append("images", files[i]);
    }
    console.log(files);

    try {
      await dispatch(uploadImage(formData));
    } catch (error) {
      console.error("Error uploading images:", error);
      alert("Error uploading images. Please try again.");
    }
  };

  return (
    <>
      <div className="prodImg__MultiContainer">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="prodImg__Grids">
            <div className="prodImg__Block--1">
              <div className="prodImg__Block--2">
                <label htmlFor="text" className="prodImg__Label--1">
                  Product Name
                </label>
                <input
                  type="text"
                  id="text"
                  className="prodImg__Input--Label"
                  placeholder="Give A Product Name"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
            </div>
            <div className="prodImg__Block--3">
              <label htmlFor="cover-photo" className="prodImg__Label--2">
                Upload Product Images
              </label>
              <div className="prodImg__Block--5">
                <div className="prodImg__Block--Center">
                  <FiImage
                    className="prodImg__Block--Icon"
                    aria-hidden="true"
                  />
                  <div className="prodImg__Block--6">
                    <label htmlFor="file-upload" className="prodImg__Label--3">
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="images"
                        type="file"
                        className="prodImg__Input--File"
                        onChange={(e) => setFiles(e.target.files)}
                        multiple
                      />
                    </label>
                    <p className="prodImg__Info--1">or drag and drop</p>
                  </div>
                  <p className="prodImg__Info--2">PNG, JPG up to 10MB</p>
                </div>
              </div>
            </div>
            <div className="prodImg__Block--4">
              <div className="prodImg__Btn--Container">
                <button type="submit" className="prodImg__Btn--Submit">
                  Upload Images
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProductMultiImg;
