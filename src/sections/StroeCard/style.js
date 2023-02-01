import { Link } from "react-router-dom";
import styled from "styled-components";

export const Cardstrore = styled.div`
  position: relative;

  display: flex;
  gap: 10px;
  font-family: "Arial";
  padding: 10px;
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  display: flex;
  justify-content: left;
  align-content: center;
  background-color: ${(props) => props.theme.pallet.cart};


`;

export const ImgCarddiv = styled.div`
  width: 185px;
  height: 205px;
`;

export const ImgCard = styled.img`
  margin-top: 10px;
`;

export const AboutList = styled.div`
display: flex;
flex-direction: column;
gap:20px;
margin-top: 10px;;
`
export const TitleCard = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: ${(props) => props.theme.pallet.main};

`;

export const PriceCard = styled.h4`
  font-weight: 600;
  font-size: 20px;
  line-height: 2px;

  letter-spacing: -0.2px;

     color: ${(props) => props.theme.pallet.main};

`;

export const InfoCard = styled.div`
margin-bottom: -10px;
  display: flex;
  gap: 20px;
`;

export const Shipping = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #00b517;
`;
export const Orders = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: ${(props) => props.theme.pallet.grey};

`;

export const Rating = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #ff9017;
`;
export const CardDesc = styled.p`
  width: 500px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.2px;

  color: ${(props) => props.theme.pallet.grey};

`;

export const StyledLink = styled(Link)`
  color: blue;
  text-decoration: none;
  &:hover {
    color: red;
  }
`;
export const Cardlike = styled.img`
  position: absolute;
  top: 25px;
  left: 980px;
`;
