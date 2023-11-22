/* eslint-disable no-unused-vars */
import React from "react";

import { ProductCreate, ProductTable } from "../index";

const ProductList = () => {
    return (
        <>
            <div className="admin__Block--Inner">
                <ProductCreate />
            </div>
            <div className="admin__Block--Inner">
                <ProductTable />
            </div>
        </>
    );
};

export default ProductList;
