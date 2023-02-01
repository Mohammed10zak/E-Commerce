import styled from "styled-components";



export const ProductCard = styled.div`
  display: flex;
  padding: 25px;
  justify-content: center;
  background-color: ${(props) => props.theme.pallet.cart};

  height: 150px;
  border: 1px solid #e0e0e0;

  width: 18.2vw;
  img {
    padding-top: 20px;
    width: 85px;
  }
`;

export const Productdetail = styled.div`
background-color: ${(props) => props.theme.pallet.cart};

  display: flex;
  flex-direction: column;
  gap:10px;
  justify-content:center;

  p {
    width: 180px;
    font-family: "Arial";
    font-weight: 400;
    font-size: 18px;
    line-height: 19px;
    color: ${(props) => props.theme.pallet.main};

  }

  span {
    width: 60px;

    font-family: "Arial";
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    
    color: ${(props) => props.theme.pallet.main};

  }
`;