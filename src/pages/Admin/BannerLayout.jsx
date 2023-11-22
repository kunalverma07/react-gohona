/* eslint-disable no-unused-vars */
import React from "react";
import { Sidebar, Banner } from "../../components/index";

const BannerLayout = () => {
    return (
        <>
            <div className="admin__Container">
                <Sidebar />
                <div className="admin__Content">
                    <Banner />
                </div>
            </div>
        </>
    );
};

export default BannerLayout;
