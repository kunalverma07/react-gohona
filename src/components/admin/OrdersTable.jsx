/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../redux/slices/OrderSlice";

import { Modal, OrderInfomation } from "../index";
import { truncate } from "../common/constant";

const tableHead = [
  {
    id: 1,
    name: "Sl No.",
  },
  {
    id: 2,
    name: "Order ID",
  },
  {
    id: 3,
    name: "Price",
  },
  {
    id: 4,
    name: "Action",
  },
];

const orderData = [
  {
    id: 1,
    orderID: "123456",
    price: 83.0,
  },
  {
    id: 2,
    orderID: "789654",
    price: 120.0,
  },
  {
    id: 3,
    orderID: "741359",
    price: 150.0,
  },
];

const OrdersTable = () => {
  const dispatch = useDispatch();
  const [viewOrder, setViewOrder] = useState(false);
  const [selectedOrder, setSelecteOrder] = useState({});

  const prodViewHandler = (order) => {
    setViewOrder(true);
    setSelecteOrder(order);
  };

  const productData = useSelector((state) => state.OrderSlice);
  const { loading, orders, error } = productData;
  //   console.log("productData Data", productData);

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  console.log("selectedOrder", selectedOrder);

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
            {loading ? (
              <h1>Loading...</h1>
            ) : (
              orders.map((order, index) => {
                const orderId = order._id.toString().slice(0, 6);

                return (
                  <tr
                    className={`${
                      order.id % 2 === 0
                        ? "table__Body--Row-2"
                        : "table__Body--Row-1"
                    }`}
                    key={order._id}
                  >
                    <th scope="row" className="table__Body--Head">
                      {index + 1}
                    </th>
                    <td className="table__Body--Data">
                      #SriMatFood/{truncate(order.createdAt, 11)}/{orderId}
                    </td>
                    {/* <td className="table__Body--Data">{order?.price}</td> */}
                    <td className="table__Body--Data">
                      ₹
                      {order.ProductData.reduce(
                        (accumulator, currentValue) =>
                          accumulator +
                          currentValue.price * currentValue.quantity,
                        0
                      )}
                    </td>
                    <td className="table__Body--Data">
                      <Link
                        to="#"
                        className="table__Anchor--View"
                        onClick={() => prodViewHandler(order)}
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
        {viewOrder ? (
          <Modal
            toggleModal={viewOrder}
            setToggleModal={setViewOrder}
            title="Order Information"
          >
            <OrderInfomation data={selectedOrder} />
          </Modal>
        ) : (
          <h1></h1>
        )}
      </div>
    </>
  );
};

export default OrdersTable;
