import styled from "styled-components";

export const BgReq = styled.div`
  position: relative;

  width: 1350px;
  height: 446px;
  margin: 0 auto;
  img {
    width: 1350px;
  }

  h2 {
    position: absolute;
    width: 400px;
    height: 78px;
    left: 50px;
    top: 30px;

    font-family: "Arial";
    font-weight: 500;
    font-size: 32px;
    line-height: 39px;
    letter-spacing: -0.2px;

    color: #ffffff;
  }

  p {
    position: absolute;
    width: 370px;
    height: 40px;
    left: 50px;
    top: 120px;

    font-family: "Arial";
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.2px;

    color: #ffffff;
  }
`;

export const Formrequest = styled.form`
  position: absolute;
  top: 30px;
  left: 850px;

  width: 480px;
  height: 346px;

  padding: 15px;
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(56, 56, 56, 0.25);
  border-radius: 6px;

  h4 {
    width: 332px;
    height: 28px;

    font-family: "Arial";
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: -0.2px;

    color: #1c1c1c;
  }

  input,
  textarea {
    width: 440px;
    height: 40px;

    background: #ffffff;

    border: 1px solid #e3e8ee;
    border-radius: 6px;
    outline: none;

    padding: 10px;
    margin-top: 10px;
  }

  div input,
  select {
    width: 260px;

    outline: none;
  }

  select {
    width: 170px;

    padding: 10px;

    border: 1px solid #e3e8ee;
    border-radius: 6px;
    margin-left: 10px;
  }

  button {
    width: 130px;
    height: 40px;

    background: linear-gradient(180deg, #127fff 0%, #0067ff 100%);

    font-family: "Arial";

    border: 1px solid #0d6efd;
    border-radius: 6px;

    color: #ffffff;
    padding: 8px;
    margin-top: 10px;
  }
`;
