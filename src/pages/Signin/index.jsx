import React, { useState } from "react";
import * as yup from "yup";

import { FormFooter } from "../../components/FormFooter";



import {
  CheckedInputWrapper,
  ErrorMessage,
  InputWrapper,
  Register,
  StyledForm,
  SubmitButton,
} from "./../Signup/style";
import {
  AlredyAccount,
  FormFootersignin,
  ShowPassword,
  StyledButton,
  StyledImg,
  StyledLinkhome,
  StyledOR,
  StyledLink,
} from "./style";

import google from "../../Images/google.svg";
import facebook from "../../Images/facebook.svg";

const initialData = {
  username: "mhmdkhzak",
  password: "mhmd123",
};

const regularExpression =
  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

function Signin() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [myData, setMyData] = useState(initialData);

  const schema = yup.object().shape({
    username: yup
      .string()
      .min(6, "Name must be at least 6 characters long")
      .max(16, "Name must be no more than 16 characters")
      .required("Name is required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters long")
      .matches(regularExpression, "Invalid Password")
      .required("Password is required"),
    checked: yup
      .boolean()
      .oneOf([true], "You must agree to the terms and conditions")
      .required(),
  });

  const handleChangeInput = (e) => {
    const { value, id } = e.target;
    if (id === "username") setUserName(value);
    if (id === "password") setPassword(value);
    if (id === "checked") setChecked(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        username,
        password,
        checked,
      };

      setIsLoading(true);
      setErrors([]);
      await schema.validate(formData, { abortEarly: false });
      setMyData({
        myData: {
          name: username,
          password: password,
          checked: checked,
        },
      });
    } catch (error) {
      if (error.errors) {
        setErrors({ errors: error.errors });
      } else {
        setErrors({ errors: [error.message] });
      }
    }

    setIsLoading(false);
  };

  return (
    <div>
      <StyledForm onSubmit={handleSubmit}>
        <Register>Sign in</Register>

        <ErrorMessage>
          {Object.values(errors).map((error, index) => (
            <div key={index}>{error}</div>
          ))}
        </ErrorMessage>
        <p>{isLoading}</p>

        <InputWrapper>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            onChange={handleChangeInput}
            value={myData.username}
            placeholder="Email or phone"
          />
        </InputWrapper>

        <InputWrapper>
          <label htmlFor="password">Password</label>
          <input
            type={passwordType}
            id="password"
            onChange={handleChangeInput}
            value={myData.password}
            placeholder="Type Here"
          />
          <ShowPassword
            onClick={() =>
              setPasswordType(passwordType === "password" ? "text" : "password")
            }
          >
            Show Password
          </ShowPassword>
        </InputWrapper>
        <CheckedInputWrapper>
          <input
            type="checkbox"
            id="checked"
            onChange={handleChangeInput}
            checked={checked}
          />
          <label htmlFor="checked">Remember me</label>
        </CheckedInputWrapper>

        <SubmitButton type="submit" disabled={isLoading}>
          <StyledLinkhome to="/alibaba">Log In</StyledLinkhome>
        </SubmitButton>
        <StyledOR>
          <div></div> <span>OR</span> <div></div>
        </StyledOR>

        <StyledButton facebook={facebook}>
          <StyledImg src={google} alt="google" />
          Continue with Google
        </StyledButton>

        <StyledButton>
          <StyledImg src={facebook} alt="facebook" facebook={facebook} />
          Continue with facebook
        </StyledButton>

        <AlredyAccount>
          Don’t have an account?
          <StyledLink to="/signup"> Register now</StyledLink>
        </AlredyAccount>
      </StyledForm>
      <FormFootersignin>
        <FormFooter />
      </FormFootersignin>
    </div>
  );
}

export default Signin;
