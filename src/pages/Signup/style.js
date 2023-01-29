import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledForm = styled.form`
  padding: 20px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 400px;
  box-shadow: 0px 3px 10px rgba(32, 32, 32, 0.1);
  border-radius: 6px;
`;

export const Register = styled.h3`
  padding-left: 20px;
  font-size: 24px;
  font-family: "Arial";
`;

export const InputFullName = styled.div`
display: flex;
input {
  width: 157px;
  border:none
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  outline:none
}
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

  label {
    font-size: 14px;
    margin-bottom: 6px;

    font-family: "Arial";
    font-size: 16px;
    letter-spacing: -0.2px;
  }
  input {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 14px;
    outline: none;
  }
`;

export const CheckedInputWrapper = styled.div`
  display: flex;
  gap: 5px;
  input {
    width: 20px;
    height: 20px;

    margin: 10px 0 0 10px;
  }

  label {
    font-size: 14px;
    margin-top: 12px;
    font-family: "Arial";
    font-size: 16px;
    letter-spacing: -0.2px;
  }

  span {
    color: #0d6efd;
  }

  &.checked {
    font-size: 40px;
  }
`;

export const PhoneInputWrapper = styled.div`
  margin-left: 10px;
  label {
    display: block;
    font-size: 14px;
    margin-bottom: 10px;

    font-family: "Arial";
    font-size: 16px;
    letter-spacing: -0.2px;
  }
  input {
    width: 240px;
    padding: 10px;
    border: 1px solid #ccc;
    font-size: 14px;
    outline: none;
  }

  select {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 14px;
    width: 121px;
    display: inline;
  }
`;

export const ShowPassword = styled.div`
  margin-top: 5px;
  font-size: 12px;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  width: 380px;
  margin-left: 10px;
  color: white;
  background: #0d6efd;

  padding: 10px;
  border: none;
  border: 1px solid #0d6efd;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  &[disabled] {
    background-color: grey;
    cursor: not-allowed;
  }
`;

export const Line = styled.div`
  width: 380px;

  background-color: #a9acb0;
  height: 2px;
  margin-top: 10px;
  margin-left: 10px;

  box-shadow: 0px 3px 10px rgba(32, 32, 32, 0.1);
  border-radius: 6px;
`;

export const ErrorMessage = styled.div`
  display: block;
  color: red;
  font-size: 16px;
  font-family: "Arial";
  width: 290px;
`;

export const StyledOR = styled.div`
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
  backgroud-color: red;
  font-size: 18px;
  font-family: "Arial";
  margin-top: 10px;
  display: flex;
  justify-content: center;
  div {
    width: 180px;
    background-color: #a9acb0;
    height: 2px;
    margin-top: 10px;
    box-shadow: 0px 3px 10px rgba(32, 32, 32, 0.1);
    border-radius: 6px;
  }
  span {
    color: #a9acb0;
    padding: 0 10px;
  }
`;

export const AlredyAccount = styled.div`
  font-family: "Arial";
  font-size: 18px;
  color: #a9acb0;

  margin: auto;
  margin-top: 10px;

  text-decoration: none;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #0d6efd;
  &:hover {
    color: #0058o4;
  }
`;

export const StyledImg = styled.img`
  height: 20px;
  width: 20px;
  margin-right: 10px;
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  gap: 85px;
  padding: 10px 20px;
  color: #606060;
  cursor: pointer;
  background-color: ${(props) => (!props.facebook ? "#3b5998" : "#ffffff")};
  color: ${(props) => (!props.facebook ? "#ffffff" : "#222")};

  border: 1px solid #e0e0e0;
  box-shadow: 0px 1px 3px rgba(56, 56, 56, 0.1);
  border-radius: 6px;
  font-size: 16px;
`;

export const StyledLinkhome = styled(Link)`
text-decoration: none;
  color: #ffffff;
`
