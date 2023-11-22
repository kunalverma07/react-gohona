/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useReducer, useEffect } from "react";

import { validate } from "../../utils/validators";

const selectReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case "TOUCH": {
      return {
        ...state,
        isTouched: true,
      };
    }
    default:
      return state;
  }
};

const Select = (props) => {
  const [inputState, dispatch] = useReducer(selectReducer, {
    value: props.initialValue || "",
    isTouched: false,
    isValid: props.initialValue || false,
  });

  const { id, onInput } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  const changeHandler = (event) => {
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      validators: props.validators,
    });
  };

  const touchHandler = () => {
    dispatch({
      type: "TOUCH",
    });
  };

  const element =
    props.element === "select" ? (
      <select
        id={props.id}
        className="form__Select--Drop"
        onChange={changeHandler}
        onBlur={touchHandler}
        options={props.options}
        value={inputState.value}
      >
        {props.options.map((option) => (
          <option key={option.value}>{option.value}</option>
        ))}
      </select>
    ) : (
      <textarea
        id={props.id}
        className="form__Input--Area"
        placeholder={props.placeholder}
        rows={props.rows || 3}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    );

  return (
    <div className="form__Container--Col-Span">
      <label htmlFor={props.id} className="form__Label--Label">
        {props.label}
      </label>
      {element}
      {!inputState.isValid && inputState.isTouched && (
        <p className="form__Input--Error">{props.errorText}</p>
      )}
    </div>
  );
};

export default Select;
