/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Card from "../components/Home/Card";
import CartSidebar from "../components/Home/CartSidebar";
import {
  AiFillEye,
  AiFillStar,
  AiFillTag,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";
import { FaTruckMoving } from "react-icons/fa";
import img from "../assets/img/product-5.png";
import Carousel from "../components/Home/Carousel";
// import { ProductModal } from "./ProductModal";
import categories from "../db/topCategories.json";
import prodImg from "../assets/img/product-5.png";
import { BsFillBasket2Fill } from "react-icons/bs";
import ProductModal from "../components/Home/ProductModal";
import ProductModalTwo from "../components/Home/ProductModalTwo";
import CategorieSidebar from "../components/Home/CategorieSidebar";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, getProductByCategory } from "../redux/slices/ProductSlice";
import {
  handleCart,
  handleFilteredProduct,
  handleIsSearchEmpty,
} from "../redux/slices/CartSlice";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addOpen, setAddOpen] = useState(false);
  const productState = useSelector((state) => state.productSlice);
  const cartState = useSelector((state) => state.CartSlice);
  const { products } = productState;
  const { cart, filteredProduct, searchTerm, productCatWise } = cartState;
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [searchItem, setSearchItem] = useState("");

  // const filteredData = products.filter((item) =>
  //   item.category.toLowerCase().includes(searchItem)
  // );

  console.log("products ------>", products);
  const filteredData = searchItem
    ? products.filter((item) => item.category === searchItem)
    : products;
  console.log("filteredData --------->", filteredData);
  // console.log("filteredData --------->", typeof filteredData[0].image);

  const [selecteProduct, setSelectedProduct] = useState({
    id: 0,
    title: "",
    price: 0,
    quantity: 0,
    totalAmount: 0,
    type: "",
  });

  const openModal = (prod) => {
    setSelectedProduct(prod);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleAddToCart = (prod) => {
    dispatch(handleCart(prod));
  };

  useEffect(() => {
    dispatch(getProduct());
    dispatch(
      getProductByCategory({
        category: "Sweets",
      })
    );
  }, []);

  const newProducts = products.map((prod) => {
    return {
      category: prod.category,
      arr: products.filter((p) => p.category === prod.category),
    };
  });

  function filterUniqueObjects(array, keys) {
    const uniqueObjects = new Map();

    array.forEach((obj) => {
      const key = keys.map((key) => obj[key]).join("|");
      if (!uniqueObjects.has(key)) {
        uniqueObjects.set(key, obj);
      }
    });

    return Array.from(uniqueObjects.values());
  }

  const uniqueDataOld = filterUniqueObjects(newProducts, ["category"]);
  const uniqueData = uniqueDataOld.map((prod) => {
    return {
      ...prod,
      arr: prod.arr.map((p) => {
        return {
          ...p,
          quantity: 0,
          totalAmount: 0,
        };
      }),
    };
  });

  return (
    <div className="home__Container--2">
      <Carousel />

      {/* recentry purchased */}
      <div className="home__Collection">
        <h2 className="home__Collection--Heading-Primary">Our Collection</h2>

        {/* <div className="home__Cate--Block">
          <select
            className="focus:ring-0 focus:border-gray-400 border-2 border-gray-400"
            onChange={(e) => setSearchItem(e.target.value)}
          >
            <option value="">All</option>
            {uniqueData.map((ud) => {
              return <option value={ud.category}> {ud.category}</option>;
            })}
          </select>
        </div> */}
        <div className="home__Cate--Block">
          <div className="text-lg flex flex-col  gap-2 text-center sm:gap-0 sm:flex-row w-full justify-around ">
            <span
              className={`cursor-pointer hover:text-green-600 ${
                searchItem === ""
                  ? "text-green-600 border-b-2 border-green-600"
                  : ""
              }`}
              onClick={(e) => setSearchItem("")}
            >
              All Categories
            </span>
            {uniqueData.map((ud) => {
              return (
                <span
                  className={`cursor-pointer ${
                    searchItem === ud.category
                      ? "text-green-600 border-b-2 border-green-600"
                      : ""
                  } hover:text-green-600`}
                  onClick={(e) => setSearchItem(ud.category)}
                >
                  {ud.category}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      <div className="grid gap-5 mb-20 mx-16 justify-evenly xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {searchTerm
          ? filteredProduct.map((prod) => {
              return (
                <div
                  key={prod._id}
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal(prod);
                  }}
                  className="md:w-52 gap-2 z-0 w-72 hover:border-[1.5px] mb-7  hover:border-[#11b76b]  rounded-md md:h-[326px] h-[360px] bg-white hover:borders   cursor-pointer"
                >
                  <div className="flex flex-col w-10/12 h-[8%]  m-auto mt-4">
                    <div className="flex-1">
                      <img
                        // src={
                        //   prod?.image != [] ? prod?.image.images[0] : prodImg
                        // }
                        src={
                          prod?.image != [] ? prod?.image.images[0] : prodImg
                        }
                        alt="prodImg"
                        className="  w-full object-cover h-[200px] md:h-[170px]"
                      />
                    </div>
                    <div className="flex flex-col justify-center m-auto text-center">
                      <h3 className="font-medium mt-2.5  md:text-lg text-xl">
                        {prod.name}
                      </h3>
                      <h3 className="text-green-500 my-2 text-xl md:text-lg">
                        ₹<strong>{prod.price}</strong>
                      </h3>
                      <button
                        onClick={(e) => {
                          // e.stopPropagation();
                          // handleAddToCart(prod);
                          setAddOpen(true);
                        }}
                        className={` ${
                          addOpen ? "block" : "block"
                        } md:px-14  px-20 text-xl md:text-[15px] p-2 md:py-1.5 hover:text-white transition ease-in-out  hover:bg-green-500 rounded-md bg-gray-200`}
                      >
                        <BsFillBasket2Fill className="inline mx-1 relative bottom-0.5" />
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          : filteredData.map((prod) => {
              return (
                <div
                  key={prod._id}
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal(prod);
                  }}
                  className="md:w-52  gap-2 z-0 w-72 hover:border-[1.5px] mb-7  hover:border-[#11b76b]     rounded-md md:h-[326px] h-[360px] bg-white hover:borders   cursor-pointer"
                >
                  <div className="flex flex-col w-10/12 h-[8%]  m-auto mt-4">
                    <div className="flex-1">
                      <img
                        src={
                          filteredData[0].image != "6523e04f97d348578c5402a7"
                            ? prod?.image?.images[0]
                            : prodImg
                        }
                        alt="prodImg"
                        className=" w-full object-cover h-[200px] md:h-[170px]"
                      />
                    </div>
                    <div className="flex flex-col justify-center m-auto text-center">
                      <h3 className="font-medium mt-2.5  md:text-lg text-xl">
                        {prod.name}
                      </h3>
                      <h3 className="text-green-500 my-2 text-xl md:text-lg">
                        ₹<strong>{prod.price}</strong>
                      </h3>
                      <button
                        onClick={(e) => {
                          // e.stopPropagation();
                          // handleAddToCart(prod);
                          setAddOpen(true);
                        }}
                        className={` ${
                          addOpen ? "block" : "block"
                        } md:px-14  px-20 text-xl md:text-[15px] p-2 md:py-1.5 hover:text-white transition ease-in-out  hover:bg-green-500 rounded-md bg-gray-200`}
                      >
                        <BsFillBasket2Fill className="inline mx-1 relative bottom-0.5" />
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        <ProductModal
          data={selecteProduct}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      </div>
    </div>
  );
};

export default Home;
