/* eslint-disable no-unused-vars */
import React from "react";
import { BannerForm, BannerInfo } from "../index";

const Banner = () => {
  return (
    <>
      <div className="admin__Block--Inner">
        <BannerForm />
      </div>
      <div className="admin__Block--Inner">
        <BannerInfo />
      </div>
    </>
  );
};

export default Banner;
