/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

// Image Imports
import logo from "../../assets/logo/logo.png";
import user from "../../assets/logo/user.png";

const Header = () => {
    return (
        <header className="header-part">
            <div className="container">
                <div className="header-content">
                    <div className="header-media-group">
                        <button className="header-user">
                            <img src={user} alt="user" />
                        </button>
                        <Link to="/">
                            <img src={user} alt="logo" />
                        </Link>
                        <button className="header-src">
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                    <Link to="/" className="header-logo">
                        <img src={logo} alt="logo" />
                    </Link>
                    <form className="header-form">
                        <input type="text" placeholder="Search anything..." />
                        <button>
                            <i className="fas fa-search"></i>
                        </button>
                    </form>
                    <div className="header-widget-group">
                        <button
                            className="header-widget header-cart"
                            title="Cartlist"
                        >
                            <i className="fas fa-shopping-basket"></i>
                            <sup>9+</sup>
                            <span>
                                total price<small>&#8377;345.00</small>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
