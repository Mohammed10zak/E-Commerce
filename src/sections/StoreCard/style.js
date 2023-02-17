import { Link } from "react-router-dom";
import styled from "styled-components";

export const Cardstore = styled.div`
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

export const AddRemoveBtn = styled.button`
  & img {
    width: 40px;
    height: 40px;
  }
  position: absolute;
  top: 27px;
  left: 920px;
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const ImgCarddiv = styled.div`
  width: 185px;
  height: 205px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImgCard = styled.img`
  margin-top: 10px;
  width: 170px;

  @media only screen and (max-width: 768px) {
    width: 140px;
  }
`;

export const AboutList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 10px; ;
`;
export const TitleCard = styled.p`
  margin-top: 20px;
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
  img {
    vertical-align: sub;
  }
`;
export const CardDesc = styled.p`
  width: 500px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.2px;

  color: ${(props) => props.theme.pallet.grey};
  @media only screen and (max-width: 768px) {
    display: none;
  }
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
