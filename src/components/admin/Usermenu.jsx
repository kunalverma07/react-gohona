/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSettings, FiUser, FiLogOut } from "react-icons/fi";

const Usermenu = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(true);

    const logoutSubmitHandler = (e) => {
        e.preventDefault();
        localStorage.removeItem("fooduser");
        navigate("/admin/");
    };

    return (
        <>
            <div className="sidenav__Menu--Grids">
                <button className="sidebarBtn1 sidenav__Menu--Btns-1">
                    <span className="sidenav__Menu--Text">
                        <FiSettings />
                    </span>
                    Settings
                </button>
                <button className=" sidebarBtn2 sidenav__Menu--Btns-2">
                    <span className="sidenav__Menu--Text">
                        <FiUser />
                    </span>
                    Profile
                </button>
                <button
                    className="sidebarBtn1 sidenav__Menu--Btns-1"
                    onClick={logoutSubmitHandler}
                >
                    <span className="sidenav__Menu--Text">
                        <FiLogOut />
                    </span>
                    Logout
                </button>
            </div>
        </>
    );
};

export default Usermenu;
