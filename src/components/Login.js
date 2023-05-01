import React, { useState } from "react";
import FormInput from "./FormInput";
import "./loginSection.css";

const initialState = {
  username: "",
  email: "",
  birthday: "",
  password: "",
  confirmPassword: "",
};

const Login = () => {
  const [info, setInfo] = useState(initialState);
  const inputArr = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Enter username",
      label: "Username",
      required: true,
      pattern: "^[A-Za-z0-9]{3,15}$",
      errorMessage:
        "Username should be 3-15 characters and should not include any special character",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Enter email",
      label: "Email",
      required: true,
      errorMessage: "Invalid Email address",
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Enter birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "text",
      placeholder: "Enter password",
      label: "Password",
      required: true,
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      errorMessage:
        "Password should be 8-20 charcter and include atleast 1 letter,1 number and 1 spcial character",
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "text",
      placeholder: "Enter confirmPassword",
      label: "ConfirmPassword",
      required: true,
      errorMessage: "Password don't match",
      pattern: info.password,
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(info);
  };
  const onChange = (e) => {
    setInfo((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  return (
    <div className="loginSection">
      <form onSubmit={handleSubmit}>
        <h1>Sign up and start learning</h1>
        {inputArr.map((input) => (
          <FormInput
            key={input.id}
            value={info[input.name]}
            onChange={onChange}
            {...input}
          />
        ))}
        <button className="login_btn">Sign Up</button>
      </form>
    </div>
  );
};

export default Login;
