import styled from "styled-components";

export const Sub = styled.form`
display: flex;
flex-direction: column;
justify-content: space-around;
align-content: center;
height: 200px;
border-bottom: 2px solid #e3e8ee;
padding: 10px;
background-color: ${(props) => props.theme.pallet.cart};
  h4 {
    font-family: "Arial";
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;

    text-align: center;
    letter-spacing: -0.2px;
    color: ${(props) => props.theme.pallet.main};
  }

  p {
    font-family: "Arial";
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;

    text-align: center;
    letter-spacing: -0.2px;

    color: ${(props) => props.theme.pallet.grey};
  }

  div {
    display: flex;
    gap: 10px;
    justify-content: center;
  }
  input {
    background: #ffffff;
    border: 1px solid #e3e8ee;
    border-radius: 6px;
    padding: 10px;
    width: 300px;
    outline: none;
  }

  button {
    background: linear-gradient(180deg, #127fff 0%, #0067ff 100%);
    border: 1px solid #0d6efd;
    border-radius: 6px;
    color: #ffffff;
    padding: 10px;
  }
`;
