/* eslint-disable no-unused-vars */
import React from "react";
import { Sidebar, ProdImages } from "../../components/index";

const ProImgsLayout = () => {
    return (
        <>
            <div className="admin__Container">
                <Sidebar />
                <div className="admin__Content">
                    <ProdImages />
                </div>
            </div>
        </>
    );
};

export default ProImgsLayout;
