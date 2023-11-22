import React, { useState } from "react";
import { ImMobile } from "react-icons/im";
import { MdLocalPhone } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import ProductModal from "./ProductModal";
import ProductModalTwo from "./ProductModalTwo";
import { handleCategoryProducts } from "../../redux/slices/CartSlice";
import { handleUniqueProducts } from "../../redux/slices/UniqueSlice";

const SubNavbar = () => {
  const productState = useSelector((state) => state.productSlice);
  const { products } = productState;
  const cartState = useSelector((state) => state.CartSlice);
  const { cart } = cartState;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selecteProduct, setSelectedProduct] = useState({
    id: 0,
    title: "",
    price: 0,
    quantity: 0,
    totalAmout: 0,
    type: "",
  });

  const dispatch = useDispatch();

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
          totalAmout: 0,
        };
      }),
    };
  });
  console.log("uniqueData -------->", uniqueData);
  dispatch(handleUniqueProducts(uniqueData));
  const openModal = (prod) => {
    setSelectedProduct(prod);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="mt-24 lg:block hidden">
        <div className="py-4 flex justify-between  gap-7 w-11/12 container m-auto">
          <div className="flex gap-4 ">
            <div className="group inline-block relative">
              <button className="  hover:text-green-500 text-gray-700  font-semibold py-2 px-4 rounded inline-flex items-center">
                <span className="mr-1">Home</span>
              </button>
            </div>
            <div className="group inline-block relative">
              <button className="  hover:text-green-500 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                <span className="mr-1">Categories</span>
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>
              <div className="z-10  pb-8 pt-2 px-12  bg-white shadow-sm rounded-lg  absolute hidden  text-gray-700 group-hover:block">
                <div className="flex  gap-3">
                  {uniqueData.map((ud) => (
                    <span className="">
                      <h4 className="text-xl w-40 font-semibold mb-4 py-3.5 border-green-500 border-b-2">
                        {ud.category}
                      </h4>
                      <ul className=" flex flex-col gap-2 ">
                        {ud.arr.map((prod) => (
                          <li
                            onClick={(e) => {
                              e.stopPropagation();
                              openModal(prod);
                            }}
                            className="cursor-pointer  pl-4 rounded-md  hover:text-green-600 hover:bg-gray-300"
                          >
                            {prod.name}
                          </li>
                        ))}
                      </ul>
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="group inline-block relative">
              <button className="  text-gray-700 hover:text-green-500 font-semibold py-2 px-4 rounded inline-flex items-center">
                <span className="mr-1 ">Pages</span>
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>
              <ul className=" z-10 w-52 bg-white shadow-sm rounded-lg  absolute hidden text-gray-700 pt-1 group-hover:block">
                <li className="">
                  <a
                    className="rounded-t font-medium  hover:text-green-500  hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    About Us
                  </a>
                </li>
                <li className="">
                  <a
                    className=" font-medium  hover:text-green-500  hover:bg-gray-200  py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Faqs
                  </a>
                </li>
                <li className="">
                  <a
                    className="rounded-b font-medium   hover:text-green-500  hover:bg-gray-200  py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/*  */}
          <div className="flex gap-10">
            <div className="flex gap-4">
              <ImMobile className="text-3xl text-green-500 mt-2" />
              <span>
                <h5>Call Us</h5>
                <number className="font-medium"> (+91) 8876140199</number>
              </span>
            </div>
            <div className="flex gap-4">
              <MdLocalPhone className="text-3xl text-green-500 mt-2" />
              <span>
                <h5>Call Us</h5>
                <number className="font-medium"> (+91) 8876140199</number>
              </span>
            </div>
            <div className="flex gap-4">
              <div className="text-4xl text-green-500"> @</div>
              <span>
                <h5>Email Us</h5>
                <number className="font-medium">
                  support@gohona.com
                </number>
              </span>
            </div>
          </div>
        </div>
      </div>
      <ProductModal
        data={selecteProduct}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
};

export default SubNavbar;
