import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { handleProdDelete, handleReset } from "../../redux/slices/CartSlice";
import { handleMainToggle } from "../../redux/slices/SidebarSlice";
import { createOrder } from "../../redux/slices/OrderSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isClicked1, setIsClicked1] = useState(false);

  const [order, setOrder] = useState({
    ProductData: [],
    userName: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  const cartState = useSelector((state) => state.CartSlice);
  const toggleSidebarState = useSelector((state) => state.toggleSidebar);
  const orderState = useSelector((state) => state.OrderSlice);
  const { totalAmount, cartIsOpen } = toggleSidebarState;
  // const { cart } = cartState;
  const { orders, loading } = orderState;

  console.log("orderState ---->", orderState);

  const iconColor = isClicked || isHovered ? "text-white" : "text-green-500";
  const iconColor1 = isClicked1 || isHovered1 ? "text-white" : "text-red-500";
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleSidebar = () => {
    dispatch(handleMainToggle(!mainIsOpen));
  };
  const cart = JSON.parse(localStorage.getItem("cartData"));
  const uniqueIds = new Set();
  const uniqueCart = cart.filter((item) => {
    if (!uniqueIds.has(item._id)) {
      uniqueIds.add(item._id);
      return true;
    }
    return false;
  });

  // console.log("uniqueCart -------->", uniqueCart);

  const placeOrder = () => {
    if (order.address && order.email && order.phoneNumber && order.userName) {
      dispatch(createOrder(order));
      setTimeout(() => {
        toast.success("Order Created Successfully", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setOrder({
          ProductData: [],
          userName: "",
          email: "",
          phoneNumber: "",
          address: "",
        });
        dispatch(handleReset());
      }, 1000);
      setTimeout(() => {
        navigate("/");
      }, [1000]);
    } else {
      toast.warn("Please Fill All Fields", {
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
  };

  console.log("order--->", order);

  return (
    <div>
      <section className="bg-gradient-to-r  mt-[100px]   rounded-t-md from-[#a8dbbb] to-[#4f5a6d]   flex-col text-center flex justify-center text-white w-full py-20">
        <h2 className="text-4xl  font-medium">CHECKOUT</h2>
        <p className="text-lg mt-4">Home / Checkout</p>
      </section>
      <div className=" bg-white p-5 text-gray-800 sm:mx-20 my-8 m-auto">
        <div>
          <h2 className="text-2xl text-center pb-6 font-semibold">
            Your Order
          </h2>
        </div>
        <div>
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-center text-gray-500 ">
              <thead className="text-white text-lg bg-green-500  ">
                <tr>
                  <th scope="col" className="px-6 py-3 rounded-l-lg">
                    Seriel
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Product
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  {/* <th scope="col" className="px-6 py-3">
                    Brand
                  </th> */}
                  <th scope="col" className="px-6 py-3">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-3 rounded-r-lg">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {uniqueCart &&
                  uniqueCart.map((prod, index) => {
                    return (
                      <tr
                        key={prod._id}
                        className="bg-white text-[18px] font-medium text-gray-800"
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                        >
                          {index + 1}
                        </th>
                        <td className="px-6 py-4">
                          <img
                            className="bg-gray-300 h-20 w-20"
                            alt=""
                            src={prod?.image.images[0]}
                          />
                        </td>
                        <td className="px-6 py-4"> {prod.name}</td>
                        <td className="px-6 py-4">
                          ₹{prod.price}/
                          <span className="font-normal">kilo</span>
                        </td>
                        {/* <td className="px-6 py-4">Fresh Company</td> */}
                        <td className="px-6 py-4">{prod.quantity}</td>
                        <td className="px-6 py-4">
                          <div className="flex gap-4 mt-auto justify-center">
                            {/* <div
                            className={`p-2 bg-gray-100 cursor-pointer hover:text-green-100 hover:bg-green-500 rounded-md ${
                              isHovered ? "hover:text-white" : ""
                            }`}
                            onClick={() => setIsClicked(true)}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                          >
                            <div className={`child ${iconColor}`}>
                              <FaEye className="text-current text-green-500" />
                            </div>
                          </div> */}

                            <div
                              className={`p-2 bg-gray-100 cursor-pointer hover:text-green-100 hover:bg-red-100 rounded-md ${
                                isHovered ? "hover:text-white" : ""
                              }`}
                              onClick={() => setIsClicked1(true)}
                              onMouseEnter={() => setIsHovered1(true)}
                              onMouseLeave={() => setIsHovered1(false)}
                            >
                              <div className={`child ${iconColor1}`}>
                                <MdDelete
                                  onClick={() => {
                                    dispatch(handleProdDelete(prod));
                                  }}
                                  className={` ${
                                    isHovered
                                      ? "text-green-400"
                                      : "text-red-500"
                                  } text-current `}
                                />
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-16">
          <div className="flex flex-col w-2/3 gap-4 text-lg font-medium  m-auto justify-around">
            <p className="flex justify-between border-b-4 border-green-500"></p>
            {/* <p className="flex justify-between border-b-2 border-gray-100">
              <span>Sub Total</span> <span>₹ 267.45</span>
            </p>
            <p className="flex justify-between border-b-2 border-gray-100">
              <span>Delivery Fee</span> <span>₹ 10.00</span>
            </p>
            <p className="flex justify-between border-b-2 border-gray-100">
              <span>Discount</span> <span>₹ 00.00</span>
            </p> */}
            <p className="flex text-green-500 justify-between ">
              <span>Total</span> <span>₹ {totalAmount}.00</span>
            </p>
          </div>
          <div className="container max-w-screen-lg  mx-auto">
            <div>
              <h2 className="font-semibold text-xl text-center mt-20 text text-gray-600 ">
                <span className="text-2xl">Order Form</span>
              </h2>

              <div className="rounded p-4 px-4 md:p-3 mb-0">
                <div className="grid gap-4 items-center gap-y-2 text-sm grid-cols-1 md:grid-cols-4 md:w-full">
                  <div className=" md:col-start-2 md:col-span-2">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                      <div className="md:col-span-5">
                        <label for="user_name">Full Name</label>
                        <input
                          type="text"
                          name="user_name"
                          id="user_name"
                          required
                          value={order.userName}
                          onChange={(e) =>
                            setOrder({
                              ...order,
                              ProductData: uniqueCart?.map((prod) => {
                                return {
                                  productName: prod.name,
                                  price: prod.price,
                                  quantity: prod.quantity,
                                };
                              }),
                              userName: e.target.value,
                            })
                          }
                          className="h-10 border mt-1 rounded px-4 focus:ring-green-600 w-full bg-gray-50"
                          placeholder="Enter full name"
                        />
                      </div>

                      <div className="md:col-span-5">
                        <label for="email">Email Address</label>
                        <input
                          type="text"
                          name="email"
                          id="email"
                          required
                          value={order.email}
                          onChange={(e) =>
                            setOrder({ ...order, email: e.target.value })
                          }
                          className="h-10 border mt-1 rounded  focus:ring-green-600 px-4 w-full bg-gray-50"
                          placeholder="Enter Email"
                        />
                      </div>

                      <div className="md:col-span-5">
                        <label for="phone">Phone</label>
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          value={order.phoneNumber}
                          onChange={(e) =>
                            setOrder({ ...order, phoneNumber: e.target.value })
                          }
                          // pattern="[1-9]{1}[0-9]{9}"
                          maxLength={10}
                          className="h-10 border mt-1 rounded  focus:ring-green-600 px-4 w-full bg-gray-50"
                          placeholder="Enter Phone Number"
                        />
                      </div>

                      <div className="md:col-span-5">
                        <label for="address">Address / Street</label>
                        <textarea
                          type=""
                          name="address"
                          id="address"
                          className="h-20 border mt-1 rounded  focus:ring-green-600 px-4 w-full bg-gray-50"
                          value={order.address}
                          onChange={(e) =>
                            setOrder({ ...order, address: e.target.value })
                          }
                          required
                          placeholder="Enter Address"
                        />
                      </div>

                      <div className="md:col-span-5 text-right">
                        <div className="inline-flex items-end">
                          <button
                            onClick={() => placeOrder()}
                            className="bg-green-600 mt-4 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                          >
                            Place Order
                          </button>
                        </div>
                        {loading ? <h4>...Loading</h4> : ""}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
