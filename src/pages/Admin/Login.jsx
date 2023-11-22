/* eslint-disable no-unused-vars */
import React from "react";
import { LoginForm } from "../../components/index";
import logo from "../../assets/logo/logo.png";

const Login = () => {
    return (
        <>
            <div className="login__Container">
                <div className="login__Block">
                    <img
                        src={logo}
                        alt="Gohona"
                    />
                </div>
                <div className="login__Block">
                    <LoginForm />
                </div>
            </div>
        </>
    );
};

export default Login;
