/* eslint-disable no-unused-vars */
import React from "react";
import { Sidebar, OrdersList } from "../../components/index";

const OrdersLayout = () => {
    return (
        <>
            <div className="admin__Container">
                <Sidebar />
                <div className="admin__Content">
                    <OrdersList />
                </div>
            </div>
        </>
    );
};

export default OrdersLayout;
