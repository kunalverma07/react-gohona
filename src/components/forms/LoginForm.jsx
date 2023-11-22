/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";

// Custom Input Components
import { useForm } from "../../hooks/form-hooks";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../utils/validators";
import InputLog from "../Inputs/InputLog";

const LoginForm = () => {
  const envUserName = import.meta.env.VITE_USERNAME;
  const envUserPassword = import.meta.env.VITE_PASSWORD;

  const userData = [
    {
      username: envUserName,
      password: envUserPassword,
    },
  ];

  const [formState, inputHandler] = useForm(
    {
      username: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const navigate = useNavigate();

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (
      formState.inputs.username.value === userData.username &&
      formState.inputs.password.value === userData.password
    ) {
      localStorage.setItem("fooduser", JSON.stringify(formState));
      navigate("/admin/dashboard/");
      console.log(formState);
    } else if (
      formState.inputs.username.value === envUserName &&
      formState.inputs.password.value === envUserPassword
    ) {
      localStorage.setItem("fooduser", JSON.stringify(formState));
      navigate("/admin/dashboard/");
      console.log(formState);
    } else {
      navigate("/admin/");
      console.log(formState);
    }
  };

  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <InputLog
          element="input"
          id="username"
          type="text"
          placeholder="Enter Your Username"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please Enter Correct Username"
          onInput={inputHandler}
        />
        <InputLog
          element="input"
          id="password"
          type="password"
          placeholder="Enter Your Password"
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(6)]}
          errorText="Please Enter Correct Password"
          onInput={inputHandler}
        />
        <div className="login__Btn--Container">
          <button className="login__Btn--Submit" type="submit">
            Login
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
