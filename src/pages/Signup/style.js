import styled from "styled-components";

export const StyledForm = styled.form`
gap: 10px;
display: flex;
flex-direction: column;
margin: 40px auto;
width: 400px;
border: 1px solid #789;
box-shadow: 0px 3px 10px rgba(32, 32, 32, 0.1);
border-radius: 6px;
padding: 20px;
background: ${(props) => props.theme.pallet.cart};

@media (max-width: 600px) {
  width: 90%;
  margin: 40px auto;
}
`;
export const Errors =styled.div`
position: absolute;
width: 400px;

margin: 80px 100px;

`

export const Register = styled.h3`
  padding-left: 20px;
  font-size: 24px;
  font-family: "Arial";
`;

export const InputFullName = styled.div`
  display: flex;
  margin-left: 10px;
  gap: 10px;
  label {
    margin-top: 10px;
    display: block;
  }
  input {
    width: 157px;
    padding: 10px;

    border: none;
    border: 1px solid #e0e0e0;
    border-radius: 6px;
    outline: none;
  }
  @media (max-width: 600px) {
  input {
    width: 72%;
  }
}
`;

export const InputWrapper = styled.div`
position: relative;
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
    width: 322px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 14px;
    outline: none;
  }

  @media (max-width: 600px) {
  input {
    width: 87%;
  }
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
    width: 200px;
    padding: 10px;
    border: 1px solid #ccc;
    font-size: 14px;
    outline: none;
  border-radius: 6px;
border-left: none;
  }

  select {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 14px;
    width: 121px;
    display: inline;
  }
  @media (max-width: 600px) {
  input {
    width: 53%;
  }
}
`;



export const SubmitButton = styled.button`
  width: 325px;
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

  @media (max-width: 600px) {
  input {
    width: 10%;
  }
}
`;

export const Line = styled.div`
  width: 325px;

  background-color: #a9acb0;
  height: 2px;
  margin-top: 10px;
  margin-left: 10px;

  box-shadow: 0px 3px 10px rgba(32, 32, 32, 0.1);
  border-radius: 6px;
`;

export const ErrorMessage = styled.span`
margin-top: 10px;
  color: red;
  font-size: 16px;
  font-family: "Arial";
  width: 200px;
`;
