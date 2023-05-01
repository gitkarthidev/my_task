import React, { useState } from "react";
import "./formInput.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;
  const handleFocus = () => {
    setFocused(true);
  };
  return (
    <div className="fromInput">
      <label>{label}</label>
      <input
        className="formInputLogin"
        onChange={onChange}
        {...inputProps}
        placeholder={props.placeholder}
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
