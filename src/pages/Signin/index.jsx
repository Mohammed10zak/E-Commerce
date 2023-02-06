import React, { useState } from "react";
import * as yup from "yup";

import { FormFooter } from "../../components/FormFooter";
import passwordshow from "../../Images/eye.png";

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
import { useAuthContext } from "../../context/AuthContext";
import { API_URL } from "../../config/api";
import axios from "axios";

const regularExpression =
  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

function Signin() {
  const {
    setAuthorized,
    loading,
    setLoading,
    errors,
    setErrors,
    setToken,
    setUsername,
  } = useAuthContext();

  const [Username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const [passwordType, setPasswordType] = useState("password");

  const handlePasswordShow = (e) => {
    e.preventDefault();
    setPasswordType(passwordType === "password" ? "text" : "password");
  };
  const schema = yup.object().shape({
    Username: yup
      .string()
      .min(6, "Name must be at least 6 characters long")
      .max(16, "Name must be no more than 16 characters")
      .required("Name is required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters long")
      .matches(regularExpression, "Invalid Password")
      .required("Password is required"),
    checked: yup.boolean().oneOf([true], "check to remember").required(),
  });

  const handleChangeInput = (e) => {
    const { value, id } = e.target;
    if (id === "username") setUserName(value);
    if (id === "password") setPassword(value);
    if (id === "checked") setChecked(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    schema
      .validate(
        {
          Username,
          password,
          checked,
        },
        { abortEarly: false }
      )
      .then(async () => {
        const res = await axios.post(`${API_URL}/users/login`, {
          email: Username,
          password: password,
        });
        if (res) {
          setToken(res.data.token);
          localStorage.setItem("token", res.data.token);
          setUsername(res.data.name);
          localStorage.setItem("name", res.data.name);
          setErrors([]);
          setLoading(false);
          setAuthorized(true);
        }
      })
      .catch((e) => {
        setErrors(e.errors || [e.message]);
        setLoading(false);
      });
  };

  return (
    <div>
      <StyledForm onSubmit={handleSubmit}>
        <Register>Sign in</Register>

        <p>{loading}</p>
        <p>
            {errors.map((error, index) => {
              return <ErrorMessage key={index}>{error}</ErrorMessage>;
            })}
          </p>
          {errors.find((error) => error.path === "checked") && (
          <ErrorMessage>
            {errors.find((error) => error.path === "checked").message}
          </ErrorMessage>
        )}

        <InputWrapper>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            onChange={handleChangeInput}
            value={Username}
            placeholder="Email or phone"
          />
          
        </InputWrapper>

        <InputWrapper>
          <label htmlFor="password">Password</label>
          <input
            type={passwordType}
            id="password"
            onChange={handleChangeInput}
            value={password}
            placeholder="Type Here"
          />

          <ShowPassword
            src={passwordshow}
            alt="passwordshow"
            className="passwordshow"
            onClick={handlePasswordShow}
          />
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
   
        <SubmitButton type="submit" disabled={loading}>
          <StyledLinkhome>Log In</StyledLinkhome>
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
