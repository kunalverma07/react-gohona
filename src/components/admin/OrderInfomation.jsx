/* eslint-disable no-unused-vars */
import React, { useMemo } from "react";
import { truncate } from "../common/constant";

const OrderInfomation = ({ data }) => {
  const totalPrice = useMemo(() => {
    return data.ProductData.reduce((curr, p) => curr + p.price, 0);
  }, [data.ProductData]);

  const orderId = data._id.toString().slice(0, 6);

  const subtotal = data.ProductData.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.quantity,
    0
  );

  console.log("data --------->", data);
  console.log("subtotal --------->", subtotal);
  return (
    <>
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          Order Details
        </h3>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-lg font-medium leading-6 text-gray-900">
              Order ID
            </dt>
            <dd className="mt-1 text-lg font-medium leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {/* SrimatreyFood/18Oct23/123456 */}
              {/* {data._id} */}
              #SriMatFood/{truncate(data.createdAt, 11)}/{orderId}
            </dd>
          </div>
          <div className="table__Container--Outer">
            <table className="table__Container--Inner">
              <thead className="table__Container--Head">
                <tr>
                  <th>Sl No.</th>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th> Quantity</th>
                </tr>
              </thead>
              <tbody>
                {data.ProductData.map((o, i) => (
                  <tr className="table__Body--Row-1" key={i}>
                    <th>{i + 1}</th>
                    <th>{o.productName}</th>
                    <th>{o.price}</th>
                    <th>{o.quantity}</th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-lg font-medium leading-6 text-gray-900">
              Total Price
            </dt>
            <dd className="text-lg font-medium leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {/* &#8377; 503.0 */}
              {subtotal}
            </dd>
          </div>
        </dl>
      </div>
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          User Details
        </h3>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-lg font-medium leading-6 text-gray-900">
              Name
            </dt>
            <dd className="mt-1 text-lg font-medium leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {data?.userName}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-lg font-medium leading-6 text-gray-900">
              Email
            </dt>
            <dd className="mt-1 text-lg font-medium leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {data?.email}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-lg font-medium leading-6 text-gray-900">
              Phone
            </dt>
            <dd className="mt-1 text-lg font-medium leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              +91 - {data?.phoneNumber}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-lg font-medium leading-6 text-gray-900">
              Address
            </dt>
            <dd className="mt-1 text-lg font-medium leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {data?.address}
            </dd>
          </div>
        </dl>
      </div>
    </>
  );
};

export default OrderInfomation;
