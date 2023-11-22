/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useForm } from "../../hooks/form-hooks";
import { VALIDATOR_REQUIRE } from "../../utils/validators";
import { Select, Input } from "../index";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../../redux/slices/ProductSlice";
import { getUploadedImage } from "../../redux/slices/ImageSlice";

const ProductCreateForm = () => {
  const dispatch = useDispatch();

  const [imageId, setImageId] = useState("");

  const imageData = useSelector((state) => state.uploadImageSlice);
  const { loading, uploadedImages, error } = imageData;

  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([]);

  // console.log("uploadImagges", uploadedImages);
  // console.log("success", success);

  useEffect(() => {
    dispatch(getUploadedImage());
  }, []);

  const prodTypes = [
    { value: "Please Select Product Types" },
    { value: "Necklace" },
    { value: "Bangles" },
    { value: "Rings" },
    { value: "Earrings" },
    { value: "Pendants" },
  ];

  const [formState, inputHandler, setFormData] = useForm(
    {
      prodName: {
        value: "",
        isValid: false,
      },
      prodType: {
        value: "",
        isValid: false,
      },
      prodImg: {
        value: "",
        isValid: false,
      },
      prodPrice: {
        value: "",
        isValid: false,
      },
      prodDesc: {
        value: "",
        isValid: false,
      },
      prodTags: {
        value: [],
        isValid: false,
      },
    },
    false
  );

  const handleAddTags = (e) => {
    e.preventDefault();
    setTags([...tags, tag]);
    setTag("");
  };

  const prodCreateFormHandler = (e) => {
    e.preventDefault();
    // const tags = ["tag1", "tag2", "tag3"];

    const data = {
      name: formState.inputs.prodName.value,
      category: formState.inputs.prodType.value,
      image: imageId,
      price: formState.inputs.prodPrice.value,
      description: formState.inputs.prodDesc.value,
      tags: tags,
    };

    dispatch(createProduct(data));
  };

  const deleteHadler = (t) => {
    // e.preventDefault();

    const updatedTags = tags.filter((tag) => tag !== t);
    setTags(updatedTags);
  };

  return (
    <>
      <form onSubmit={prodCreateFormHandler}>
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Product Name
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              <Input
                element="input"
                id="prodName"
                placeholder="Enter Product Name"
                type="text"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please Enter Product Name"
                onInput={inputHandler}
              />
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Product Type
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              <Select
                element="select"
                id="prodType"
                placeholder="Select Product Type"
                options={prodTypes}
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please Select Product Type"
                onInput={inputHandler}
              />
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Product Images
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              <select
                id="prodImg"
                name="type"
                placeholder="Select Product Image Name"
                className="form__Select--Drop"
                onChange={(e) => setImageId(e.target.value)}
                value={imageId}
              >
                <option>Select Product Image Name</option>
                {uploadedImages.map((item) => (
                  <option value={item._id}>{item.name}</option>
                ))}
              </select>
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Product Price
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              <Input
                element="input"
                id="prodPrice"
                placeholder="Enter Product Price"
                type="text"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please Enter Product Price"
                onInput={inputHandler}
              />
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Product Description
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              <Input
                id="prodDesc"
                placeholder="Enter Product Description"
                type="text"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please Enter Product Description"
                onInput={inputHandler}
              />
            </dd>
          </div>
          <div className="product__CreateForm--Grids">
            <dt className="product__CreateForm--Label">Product Tags</dt>
            <dd className="product__CreateForm--Data">
              <div className="w-auto flex">
                {/* {formState.inputs.prodTags.value.map((tag, index) => (
                  <Input
                    element="input"
                    id={`prodTags-${index}`}
                    placeholder="Enter Product Tags"
                    type="text"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please Enter Product Tags"
                    onInput={inputHandler}
                  />
                ))} */}

                <input
                  type="text"
                  value={tag}
                  onChange={(e) => setTag(e.target.value)}
                  className="form__Input"
                />
                <button
                  onClick={handleAddTags}
                  type="submit"
                  className="form__Btn--Submit ml-5 w-32"
                >
                  Add Tags
                </button>
              </div>
              <br />
              <div className="flex flex-wrap border border-gray-300 p-3 rounded-lg">
                {tags.map((t, i) => (
                  <div
                    key={i}
                    className="flex items-center bg-gray-200 rounded-full px-3 py-1 m-1"
                  >
                    <span className="text-gray-700">{t}</span>
                    <button
                      className="ml-2 text-red-600 hover:text-red-800 focus:outline-none"
                      onClick={() => deleteHadler(t)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900"></dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              <button type="submit" className="form__Btn--Submit">
                Create New Products
              </button>
            </dd>
          </div>
        </dl>
      </form>
    </>
  );
};

export default ProductCreateForm;
