/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useForm } from "../../hooks/form-hooks";
import { VALIDATOR_REQUIRE } from "../../utils/validators";
import { Select, Input } from "../index";
import { useDispatch } from "react-redux";
import { bannerImage, getUploadedBanner } from "../../redux/slices/BannerSlice";

const BannerForm = () => {
  const [selectedValue, setSelectedValue] = useState();
  const [selectedFile, setSelectedFile] = useState(null);
  const dispatch = useDispatch();

  const sliderNums = [
    { value: "Please Select Slider Number" },
    { value: "1" },
    { value: "2" },
    { value: "3" },
    { value: "4" },
  ];

  const [formState, inputHandler, setFormData] = useForm(
    {
      selectSlide: {
        value: "",
        isValid: false,
      },
      sliderImg: {
        value: null,
        isValid: false,
      },
    },
    false
  );

  // console.log(selectedValue);
  // console.log("image", formState.inputs.sliderImg.value?.files[0]); // Access the selected file

  const imgUploadHandler = (e) => {
    e.preventDefault();
    console.log("hello world");

    if (selectedValue && selectedFile) {
      const formData = new FormData();
      formData.append("image", selectedFile);
      formData.append("title", selectedValue);

      dispatch(bannerImage(formData));
    }

    // if (formState.inputs > 0) {
    //   setFormData(
    //     {
    //       ...formState.inputs,
    //       name: undefined,
    //     },
    //     formState.inputs.selectSlide.isValid &&
    //       formState.inputs.sliderImg.isValid
    //   );
    //   console.log(formState.inputs);
    // } else {
    //   setFormData(
    //     {
    //       ...formState.inputs,
    //       name: {
    //         value: "",
    //         isValid: false,
    //       },
    //     },
    //     false
    //   );
    //   console.log(formState.inputs);
    // }
  };

  // console.log("formState is", formState);

  return (
    <>
      <form onSubmit={imgUploadHandler}>
        <div className="w-full">
          <div className="flex gap-3 h-12 p-1 w-100">
            {/* <Select
            element="select"
            id="selectSlide"
            label="Select Slider Number"
            placeholder="Select Slider Number"
            options={sliderNums}
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please Select Slider Number"
            onInput={inputHandler}
          /> */}
            <select
              id="selectSlide"
              className="form__Select--Drop"
              onChange={(e) => setSelectedValue(e.target.value)}
            >
              <option value="Slider 1">Please Select Slider Number</option>
              <option value="Slider 1">1</option>
              <option value="Slider 2">2</option>
              <option value="Slider 3">3</option>
              <option value="Slider 4">4</option>
            </select>

            {/* <Input
            element="input"
            id="sliderImg"
            label="Upload Slider Image"
            placeholder="Upload Slider Image"
            type="file"
            errorText="Please Upload Slider Images"
            errorInfo="PNG, JPG (MAX SIZE. 5MB)."
            validators={[VALIDATOR_REQUIRE()]}
            onInput={inputHandler}
          /> */}
            {/* <label>Upload Slider Image</label> */}
            <input
              className="form__Input"
              type="file"
              id="sliderImg"
              onChange={(e) => setSelectedFile(e.target.files[0])}
            />

            <div className="">
              <div className="">
                <button type="submit" className="form__Btn--Submit w-32 h-10">
                  Upload
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default BannerForm;
