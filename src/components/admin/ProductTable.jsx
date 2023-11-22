import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalAlert,
  ProductImgView,
  ProductInfo,
  ProductCreateForm,
} from "../index";
import { useDispatch, useSelector } from "react-redux";
import { ResetAllProduct, getProduct } from "../../redux/slices/ProductSlice";
import { truncate } from "../common/constant";
import { toast } from "react-toastify";
import ProductEditForm from "./ProductEditForm";
import ViewProductImg from "./ViewProductImg";
import { Link } from "react-router-dom";

const tableHead = [
  {
    id: 1,
    name: "Sl No.",
  },
  {
    id: 2,
    name: "Product Name",
  },
  {
    id: 3,
    name: "Product Category",
  },
  {
    id: 4,
    name: "Product Price",
  },
  {
    id: 5,
    name: "Product Created (DD/MM/YYYY)",
  },
  {
    id: 6,
    name: "Action",
  },
];

const prodTypes = [
  { value: "Necklace" },
  { value: "Bangles" },
  { value: "Rings" },
  { value: "Earrings" },
  { value: "Pendants" },
];

const ProductTable = () => {
  const dispatch = useDispatch();

  const itemsPerPage = 8;

  // const [page, setPage] = useState(1);

  const getPageFromLocalStorage = () => {
    const storedPage = localStorage.getItem("currentPage");
    return storedPage ? parseInt(storedPage, 10) : 1;
  };

  const [page, setPage] = useState(getPageFromLocalStorage());

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const [viewProdModal, setViewProdModal] = useState(false);
  const [editProdModal, setEditProdModal] = useState(false);
  const [deleteProdModal, setDeleteProdModal] = useState(false);
  const [selectedProduct, setSelecteProduct] = useState({});

  const [filterCategory, setFilterCategory] = useState("");

  const prodViewHandler = (prod) => {
    setViewProdModal(true);
    setSelecteProduct(prod);
  };

  const prodEditHandler = (prod) => {
    setEditProdModal(true);
    setSelecteProduct(prod);
  };

  const prodDeleteHandler = (prod) => {
    setDeleteProdModal(true);
    setSelecteProduct(prod);
  };

  const productData = useSelector((state) => state.productSlice);
  const { loading, products, error, deleteSuccess } = productData;

  // console.log("products", products);

  const setPageInLocalStorage = (pageNumber) => {
    localStorage.setItem("currentPage", pageNumber);
  };

  // ... existing code ...

  // Step 3: Update localStorage when the page changes
  useEffect(() => {
    setPageInLocalStorage(page);
  }, [page]);

  useEffect(() => {
    setDeleteProdModal(false);

    if (deleteSuccess === true) {
      toast.success("Product deleted successfully", {
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
    dispatch(getProduct());
    dispatch(ResetAllProduct());
  }, [deleteSuccess]);

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  const totalPage = Math.ceil(products?.length / itemsPerPage);
  const startPage = page - 1 >= 2 ? page - 2 : 1;
  const endPage = Math.min(startPage + 3, totalPage);

  const filterProducts = products?.filter((p) =>
    filterCategory !== "" ? filterCategory === p.category : p
  );

  return (
    <>
      <div className="table__Container--Outer">
        <div className="w-60 mb-3">
          <select
            className="form__Select--Drop"
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option value="">Filter by Category</option>
            {prodTypes.map((c, i) => (
              <option key={i} value={c.value}>
                {c.value}
              </option>
            ))}
          </select>
        </div>

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
              filterProducts?.slice(startIndex, endIndex).map((prod, index) => {
                const serialNumber = startIndex + index + 1;

                return (
                  <tr
                    className={`${
                      prod.id % 2 === 0
                        ? "table__Body--Row-2"
                        : "table__Body--Row-1"
                    }`}
                    key={prod._id}
                  >
                    <th scope="row" className="table__Body--Head">
                      {serialNumber}
                    </th>
                    <td className="table__Body--Data">{prod.name}</td>
                    <td className="table__Body--Data">{prod.category}</td>
                    <td className="table__Body--Data">{prod.price}</td>
                    <td className="table__Body--Data">
                      {truncate(prod.createdAt, 11)}
                    </td>
                    <td className="table__Body--Data">
                      <Link
                        to="#"
                        className="table__Anchor--View"
                        onClick={() => prodViewHandler(prod)}
                      >
                        View
                      </Link>

                      <Link
                        to="#"
                        className="table__Anchor--Edit"
                        onClick={() => prodEditHandler(prod)}
                      >
                        Edit
                      </Link>
                      <Link
                        to="#"
                        className="table__Anchor--Delete"
                        onClick={() => prodDeleteHandler(prod)}
                      >
                        Delete
                      </Link>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>

        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">{startIndex + 1}</span> to{" "}
                <span className="font-medium">
                  {Math.min(startIndex + itemsPerPage, products?.length)}
                </span>{" "}
                of <span className="font-medium">{products?.length}</span>{" "}
                results
              </p>
            </div>
            <div>
              <nav
                className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                aria-label="Pagination"
              >
                <button
                  href="#"
                  className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  onClick={() => setPage(page - 1)}
                  disabled={page === 1}
                >
                  <h1>Prev</h1>
                </button>
                {Array.from(
                  { length: endPage - startPage + 1 },
                  (_, i) => startPage + i
                ).map((pageNum) => (
                  <a
                    key={pageNum}
                    href="#"
                    className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover.bg-gray-50 focus:z-20 focus:outline-offset-0 ${
                      pageNum === page ? "bg-indigo-600 text-white" : ""
                    }`}
                    onClick={() => setPage(pageNum)}
                  >
                    {pageNum}
                  </a>
                ))}
                <button
                  href="#"
                  className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  onClick={() => setPage(page + 1)}
                  disabled={page === totalPage}
                >
                  <h1>Next</h1>
                </button>
              </nav>
            </div>
          </div>
        </div>
        {viewProdModal ? (
          <Modal
            toggleModal={viewProdModal}
            setToggleModal={setViewProdModal}
            data={selectedProduct}
            title="Product Information"
          >
            <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
              <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                <ViewProductImg prodImage={selectedProduct?.image} />
              </div>
              <ProductInfo prodInfo={selectedProduct} />
            </div>
          </Modal>
        ) : (
          <h1></h1>
        )}

        {editProdModal ? (
          <Modal
            toggleModal={editProdModal}
            setToggleModal={setEditProdModal}
            title="Update Product Information"
          >
            <ProductEditForm data={selectedProduct} />
          </Modal>
        ) : (
          " "
        )}

        {deleteProdModal ? (
          <ModalAlert
            toggleModal={deleteProdModal}
            setToggleModal={setDeleteProdModal}
            data={selectedProduct}
            prodId={selectedProduct._id}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default ProductTable;
