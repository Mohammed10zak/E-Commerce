import styled from "styled-components";

export const Item = styled.div`

  width: 280px;
  height: 310px;
  padding: 10px;
  background-color: ${(props) => props.theme.pallet.cart};



  border: 1px solid #e0e0e0;
  border-radius: 6px;

  margin-top: 10px;

  div {
    width: 200px;
    height: 200px;

    display: flex;
    justify-content: center;
    padding: 10px;
  }

  img {
    margin-left:10px;
    width: 150px;
    height: 170px;
  }

  p {
    font-family: "Arial";
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: ${(props) => props.theme.pallet.main};

  }

  span {
    font-family: "Arial";
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.2px;
    color: ${(props) => props.theme.pallet.main};

  }
`;
