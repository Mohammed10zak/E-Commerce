import axios from "axios";
import React, { useState } from "react";
import * as yup from "yup";
import { FormFooter } from "../../components/FormFooter";
import { API_URL } from "../../config/api";
import { useAuthContext } from "../../context/AuthContext";

import { AlredyAccount, StyledLink } from "../Signin/style";
import {
  CheckedInputWrapper,
  ErrorMessage,
  Errors,
  InputFullName,
  InputWrapper,
  Line,
  PhoneInputWrapper,
  Register,
  StyledForm,
  SubmitButton,
} from "./style";

const regularExpression =
  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

function Signup() {
  const {
    setAuthorized,
    loading,
    setLoading,
    errors,
    setErrors,
    setToken,
    setUsername,
  } = useAuthContext();

  const [name, setName] = useState("");
  const [surname, setSurName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpass, setConfirmpass] = useState("");
  const [checked, setChecked] = useState(false);
  const [selectedOption, setSelectedOption] = useState("UZ +998");

  const schema = yup.object().shape({
    name: yup
      .string()
      .min(6, "Name must be at least 6 characters")
      .max(16, "Name must be no more than 16 characters")
      .required("Name is required"),
    surname: yup
      .string()
      .min(6, "SurName must be at least 6 characters")
      .max(16, "SurName must be no more than 16 characters")
      .required("SurName is required"),
    phone: yup.string().matches(phoneRegExp, "Phone number is not valid"),

    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters long")
      .matches(regularExpression, "Invalid Password")
      .required("Password is required"),
    confirmpass: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
    checked: yup
      .boolean()
      .oneOf([true], "You must agree to the terms and conditions")
      .required(),
    selectedOption: yup
      .string()
      .oneOf(["UZ +998", "UZ +997", "UN +967"], "Invalid option selected"),
  });

  const handleChangeInput = (e) => {
    const { value, id } = e.target;
    if (id === "name") setName(value);
    if (id === "surname") setSurName(value);
    if (id === "email") setEmail(value);
    if (id === "phone") setPhone(value);
    if (id === "password") setPassword(value);
    if (id === "confirmpass") setConfirmpass(value);
    if (id === "checked") setChecked(e.target.checked);
    if (id === "phoneA") setSelectedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    schema
      .validate(
        {
          name,
          email,
          password,
          surname,
          phone,
          confirmpass,
          checked,
          selectedOption,
        },
        { abortEarly: false }
      )
      .then(async () => {
        const res = await axios.post(`${API_URL}/users/signup`, {
          name: name,
          email: email,
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
        setLoading(true);
      });
  };
  return (
    <div>
      <Errors>
        {errors.map((error, index) => {
          return (
            <ErrorMessage key={index}>
              <li>{error}</li>
            </ErrorMessage>
          );
        })}
      </Errors>
      <StyledForm onSubmit={handleSubmit}>
        <Register>Register</Register>

        <InputFullName>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              onChange={handleChangeInput}
              value={name}
              placeholder="Type here"
            />
          </div>

          <div>
            <label htmlFor="surname">Surname</label>
            <input
              type="text"
              id="surname"
              onChange={handleChangeInput}
              value={surname}
              placeholder="Type here"
            />
          </div>
        </InputFullName>

        <InputWrapper>
          <label htmlFor="email">Your e-mail </label>
          <input
            type="email"
            id="email"
            onChange={handleChangeInput}
            value={email}
            placeholder="example@mail.com"
          />
        </InputWrapper>
        <PhoneInputWrapper>
          <label htmlFor="phone">Phone</label>
          <select
            name="phoneA"
            id="phoneA"
            value={selectedOption}
            onChange={handleChangeInput}
          >
            <option>UZ +998</option>
            <option>UZ +997</option>
            <option>UN +967</option>
          </select>

          <input
            type="tel"
            id="phone"
            onChange={handleChangeInput}
            value={phone}
            placeholder="00-000-00-00"
          />
        </PhoneInputWrapper>

        <InputWrapper>
          <label htmlFor="password">Password:</label>
          <input
            type={"password"}
            id="password"
            onChange={handleChangeInput}
            value={password}
            placeholder="At least 6 characters."
          />
        </InputWrapper>

        <InputWrapper>
          <label htmlFor="confirmpass">Confirm Password:</label>
          <input
            type="password"
            id="confirmpass"
            onChange={handleChangeInput}
            value={confirmpass}
            placeholder="Type here"
          />
        </InputWrapper>

        <SubmitButton type="submit">
          {loading ? "loading..." : " Register now"}
        </SubmitButton>

        <CheckedInputWrapper>
          <input
            type="checkbox"
            id="checked"
            onChange={handleChangeInput}
            checked={checked}
          />
          <label htmlFor="checked">
            I agree to the <span>Terms and Conditions</span>
          </label>
        </CheckedInputWrapper>

        <Line>
          <div></div>
        </Line>

        <AlredyAccount>
          Already have an accaunt?
          <StyledLink to="/signin"> Log in</StyledLink>
        </AlredyAccount>
      </StyledForm>
      <FormFooter />
    </div>
  );
}

export default Signup;
