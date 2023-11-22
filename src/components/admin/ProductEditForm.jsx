/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useForm } from "../../hooks/form-hooks";
import { VALIDATOR_REQUIRE } from "../../utils/validators";
import { Select, Input } from "../index";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../../redux/slices/ProductSlice";
import { getUploadedImage } from "../../redux/slices/ImageSlice";

const ProductEditForm = ({ data }) => {
  const dispatch = useDispatch();

  const [imageId, setImageId] = useState(data.image);

  const imageData = useSelector((state) => state.uploadImageSlice);
  const { loading, uploadedImages, error } = imageData;

  const { success } = useSelector((state) => state.productSlice);

  // console.log("uploadImagges", uploadedImages);
  // console.log("success", success);
  // console.log("data", data);

  useEffect(() => {
    dispatch(getUploadedImage());
  }, []);

  const prodTypes = [
    { value: "Please Select Product Types" },
    { value: "Food Powders" },
    { value: "Pickles" },
    { value: "Sweets" },
    { value: "Savories" },
    { value: "Diary" },
  ];

  const [formState, inputHandler, setFormData] = useForm(
    {
      prodName: {
        value: data?.name,
        isValid: false,
      },
      prodType: {
        value: data?.category,
        isValid: false,
      },
      prodImg: {
        value: "",
        isValid: false,
      },
      prodPrice: {
        value: data?.price,
        isValid: false,
      },
      prodDesc: {
        value: data?.description,
        isValid: false,
      },
      prodTags: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  console.log("formState----->", formState);

  const prodUpdateFormHandler = (e) => {
    e.preventDefault();
    const tags = ["tag1", "tag2", "tag3"];

    const datas = {
      name: formState.inputs.prodName.value,
      category: formState.inputs.prodType.value,
      image: imageId,
      price: formState.inputs.prodPrice.value,
      description: formState.inputs.prodDesc.value,
      tags: tags,
      id: data._id,
    };

    dispatch(updateProduct(datas));
  };

  return (
    <>
      <form onSubmit={prodUpdateFormHandler}>
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
                initialValue={formState.inputs.prodName.value}
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
                initialValue={formState.inputs.prodType.value}
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
                initialValue={formState.inputs.prodPrice.value}
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
                initialValue={formState.inputs.prodDesc.value}
              />
            </dd>
          </div>
          <div className="product__CreateForm--Grids">
            <dt className="product__CreateForm--Label">Product Tags</dt>
            <dd className="product__CreateForm--Data">
              <div className="product__CreateForm--Data-Grid">
                <Input
                  element="input"
                  id="prodTags"
                  placeholder="Enter Product Tgas"
                  type="text"
                  validators={[VALIDATOR_REQUIRE()]}
                  errorText="Please Enter Product Tags"
                  onInput={inputHandler}
                  // initialValue={formState.inputs.prodPrice.value}
                />
                <Input
                  element="input"
                  id="prodTags"
                  placeholder="Enter Product Tgas"
                  type="text"
                  validators={[VALIDATOR_REQUIRE()]}
                  errorText="Please Enter Product Tags"
                  onInput={inputHandler}
                  // initialValue={formState.inputs.prodPrice.value}
                />
                <Input
                  element="input"
                  id="prodTags"
                  placeholder="Enter Product Tgas"
                  type="text"
                  validators={[VALIDATOR_REQUIRE()]}
                  errorText="Please Enter Product Tags"
                  onInput={inputHandler}
                  // initialValue={formState.inputs.prodPrice.value}
                />
                <Input
                  element="input"
                  id="prodTags"
                  placeholder="Enter Product Tgas"
                  type="text"
                  validators={[VALIDATOR_REQUIRE()]}
                  errorText="Please Enter Product Tags"
                  onInput={inputHandler}
                />
                <Input
                  element="input"
                  id="prodTags"
                  placeholder="Enter Product Tgas"
                  type="text"
                  validators={[VALIDATOR_REQUIRE()]}
                  errorText="Please Enter Product Tags"
                  onInput={inputHandler}
                />
                <Input
                  element="input"
                  id="prodTags"
                  placeholder="Enter Product Tgas"
                  type="text"
                  validators={[VALIDATOR_REQUIRE()]}
                  errorText="Please Enter Product Tags"
                  onInput={inputHandler}
                />
                <Input
                  element="input"
                  id="prodTags"
                  placeholder="Enter Product Tgas"
                  type="text"
                  validators={[VALIDATOR_REQUIRE()]}
                  errorText="Please Enter Product Tags"
                  onInput={inputHandler}
                />
                <Input
                  element="input"
                  id="prodTags"
                  placeholder="Enter Product Tgas"
                  type="text"
                  validators={[VALIDATOR_REQUIRE()]}
                  errorText="Please Enter Product Tags"
                  onInput={inputHandler}
                />
                <Input
                  element="input"
                  id="prodTags"
                  placeholder="Enter Product Tgas"
                  type="text"
                  validators={[VALIDATOR_REQUIRE()]}
                  errorText="Please Enter Product Tags"
                  onInput={inputHandler}
                />
              </div>
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900"></dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              <button type="submit" className="form__Btn--Submit">
                Update
              </button>
            </dd>
          </div>
        </dl>
      </form>
    </>
  );
};

export default ProductEditForm;
