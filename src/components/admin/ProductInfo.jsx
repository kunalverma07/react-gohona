/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const ProductInfo = ({ prodInfo }) => {
  console.log("prodInfo", prodInfo);
  return (
    <>
      <div className="sm:col-span-8 lg:col-span-7">
        <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
          {/* Sambar Powder */}
          {prodInfo.name}
        </h2>
        <section aria-labelledby="information-heading" className="mt-2">
          {/* <h3 id="information-heading" className="sr-only">
            {prodInfo.name}
          </h3> */}
          <p className="text-lg text-gray-900">{prodInfo.category}</p>
          <p className="text-lg text-gray-900">
            &#8377; {prodInfo.price} (Per 100 Grams)
          </p>
          <p className="text-lg text-gray-900">{prodInfo.description}</p>
        </section>
      </div>
    </>
  );
};

export default ProductInfo;
