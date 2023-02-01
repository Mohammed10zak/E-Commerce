import styled from "styled-components";

export const ServiceCart = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.pallet.cart};

  width: 305px;
  height: 250px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  p {
    width: 165px;
    height: 50px;
    text-align: left;

    font-family: "Arial";
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    padding: 10px;
    color: ${(props) => props.theme.pallet.main};

  }
`;

export const SerImg = styled.img`
  width: 303px;
  height: 145px;
  background: #123;
  border-radius: 6px;

`;

export const IconImg = styled.img`
  position: absolute;
  width: 50px;
  height: 50px;
  left: 230px;
  top: 130px;

  background: #d1e7ff;
  padding: 10px;
  border: 2px solid #ffffff;
  border-radius: 25px;
`;
