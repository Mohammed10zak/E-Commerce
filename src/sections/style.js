import styled from "styled-components";
import { Link } from "react-router-dom";

export const Dealoffer = styled.div`
  width: 198px;
  height: 100px;
  p {
    margin-top:10px;
    font-size: 16px;
    text-align: center;
    color: #ffffff;
    line-height:0.5px;
  }

  span {
    display:block
    font-size: 12px;
    text-align: center;

    font-family: "Arial";
    font-weight: 400;
    font-size: 12px;
    margin-left: 10px;
    color: #ffffff;
  }
`;

export const Clndr = styled.div`
  display: flex;
  gap: 10px;
`;
export const Timeclndr = styled.div`
  width: 70px;
  height: 50px;

  background: #606060;
  border-radius: 4px;
`;

export const Dealp = styled.div`
  width: 155px;

  font-family: "Arial";
  line-height: 39px;

  color: #8b96a5;
  &::first-line {
    font-family: "Arial";
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: -0.2px;
    color: #1c1c1c;
  }

  &::second-line {
    font-style: "Arial";
    font-weight: 400;
    font-size: 20px;
    line-height: 19px;
  }
`;

export const Offer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  background: #ffffff;

  div {
    width: 140px;
    height: 140px;
    left: 20px;
    top: 8px;

    background: #ffffff;
  }
  p {
    font-family: "Arial";
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin-top: 30px;
    letter-spacing: -0.2px;

    color: #1c1c1c;
  }

  span {
    width: 40px;
    padding: 10px;
    margin: 0 auto;
    background: #ffe3e3;
    border-radius: 29px;
  }
`;

export const Sources = styled.div`
  img {
    left: 422px;
    top: 852px;
    height: 302px;
    width: 230px;
    background: linear-gradient(
      0deg,
      rgba(255, 232, 186, 0.4),
      rgba(255, 232, 186, 0.4)
    );
    opacity: 0.93;
  }

  p {
    position: absolute;
    width: 130px;
    height: 52px;
    left: 195px;
    top: 870px;

    font-family: "Arial";
    font-weight: 600;
    font-size: 20px;
    line-height: 26px;
    letter-spacing: -0.2px;
    color: #1c1c1c;
  }
  button {
    position: absolute;
    left: 190px;
    top: 970px;

    padding: 10px;
    border-radius: 6px;
    border: none;

    font-family: "Arial";
    font-weight: 700;
    font-size: 16px;

    line-height: 19px;
    text-align: center;

    background-color: #ffffff;
    color: #1c1c1c;
  }
`;

export const ProductCard = styled.div`
  display: flex;
  padding: 25px;
  justify-content: center;
  height: 100px;
  border: 1px solid #e0e0e0;

  width: 12.5vw;
  img {
    padding-top: 20px;
    width: 80px;
    height: 70px;
  }
`;

export const Productdetail = styled.div`
  display: flex;
  flex-direction: column;

  p {
    width: 120px;
    font-family: "Arial";
    font-weight: 400;
    font-size: 18px;
    line-height: 19px;
    color: #1c1c1c;
  }

  span {
    width: 60px;

    font-family: "Arial";
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: #8b96a5;
  }
`;
export const BgReq = styled.div`
  position: relative;

  width: 1205px;
  height: 446px;
  margin: 0 auto;
  img {
    width: 1205px;
  }

  h2 {
    position: absolute;
    width: 400px;
    height: 78px;
    left: 70px;
    top: 20px;

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
    left: 70px;
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
  left: 670px;

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

export const Item = styled.div`
  width: 220px;
  height: 310px;
  padding: 10px;
  background: #ffffff;

  border: 1px solid #e0e0e0;
  border-radius: 6px;

  margin-top: 10px;

  div {
    width: 200px;
    height: 200px;

    display: flex;
    justify-content: center;
    padding: 6px;
  }

  img {
    width: 180px;
    height: 170px;
  }

  p {
    font-family: "Arial";
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: #1c1c1c;
  }

  span {
    font-family: "Arial";
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.2px;
    color: #8b96a5;
  }
`;

export const ServiceCart = styled.div`
  width: 280px;
  height: 200px;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  p {
    width: 159px;
    height: 44px;
    text-align: left;
    font-family: "Arial";
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    padding: 10px;

    color: #1c1c1c;
  }
`;

export const SerImg = styled.img`
  background: #123;
`;

export const IconImg = styled.img`
  position: relative;
  width: 30px;
  height: 30px;
  left: 200px;
  top: -120px;

  background: #d1e7ff;
  padding: 10px;
  border: 2px solid #ffffff;
  border-radius: 25px;
`;

export const SupplierRegion = styled.div`
  display: flex;
  img {
    width: 28px;
    padding: 20px 10px;
  }

  p {
    font-family: "Arial";
    font-weight: 400;
    font-size: 16px;
    line-height: 1px;
    letter-spacing: -0.2px;
    color: #1c1c1c;
  }

  span {
    font-family: "Arial";
    font-weight: 400;
    font-size: 13px;
    line-height: 10px;

    color: #8b96a5;
  }
`;
export const Cardstrore = styled.div`
  position: relative;

  display: flex;
  gap: 20px;
  font-family: "Arial";
  padding: 10px;
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  display: flex;
  justify-content: left;
  align-content: center;
`;

export const ImgCarddiv = styled.div`
  width: 185px;
  height: 185px;
`;

export const ImgCard = styled.img`
  margin-top: 10px;
`;
export const TitleCard = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #1c1c1c;
`;

export const PriceCard = styled.h4`
  font-weight: 600;
  font-size: 20px;
  line-height: 2px;

  letter-spacing: -0.2px;

  color: #1c1c1c;
`;

export const InfoCard = styled.div`
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

  color: #8b96a5;
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

  color: #505050;
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
  top: 20px;
  left: 1090px;
`;

export const Cardelectronic = styled.div`
  background: #ffffff;

  font-family: "Arial";
  position: relative;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 320px;
  height: 400px;

  background: #ffffff;
  border: 1px solid #e3e8ee;

  border-radius: 6px;
  margin-bottom: 20px;
`;

export const ImgElediv = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;

  padding: 10px;

  width: 320px;
  heigth: 320px;
  border-bottom: 1px solid #eff2f4;
`;

export const ImgElectronicCard = styled.img``;

export const ElectronicPriceCard = styled.h5`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #1c1c1c;
`;

export const ElectronicTitleCard = styled.p`
  width: 200px;
  heigth: 220px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  letter-spacing: -0.2px;

  color: #606060;
`;

export const Elelike = styled.img`
  position: absolute;
  left: 280px;
  bottom: 90px;
`;

export const MayProd = styled.div`
  display: flex;
  gap: 6px;
  div p {
    width: 150px;
    font-family: "Arial";
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;

    letter-spacing: -0.2px;

    color: #1c1c1c;
  }

  div span {
    width: 109px;
    height: 24px;

    font-family: "Arial";

    font-weight: 400;
    font-size: 16px;
    line-height: 10px;

    letter-spacing: -0.2px;

    /* gray-500 */

    color: #8b96a5;
  }
`;
export const ImgDiv = styled.div`
  width: 60px;
  padding: 10px;
  background: #ffffff;

  border: 1px solid #e0e0e0;
  border-radius: 6px;
  margin-top: 6px;
`;

export const RelatedProduct = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-family: "Arial";
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    width: 140px;
    color: #505050;
  }

  span {
    font-family: "Arial";
    font-weight: 400;
    font-size: 16px;
    line-height: 10px;

    color: #8b96a5;
  }
`;

export const Imgdiv = styled.div`
  padding: 8px;
  width: 165px;
  height: 165px;
  background: #eeeeee;
  border-radius: 6px;
  img {
    margin: 8px;
  }
`;

export const Cartt = styled.div`
  position: relative;
  display: flex;
  gap: 10px;
  width: 880px;
  height: 170px;
  border-bottom: 1px solid #e3e8ee;
`;
export const Imgcart = styled.div`
  background: #f7f7f7;
  height: 70px;
  width: 60px;
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
`;
export const CartInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CartTitle = styled.p`
  font-family: "Arial";
  font-weight: 500;
  font-size: 16px;
  color: #1c1c1c;
  margin-top: -1px;
`;
export const Cartdesc = styled.span`
  width: 280px;
  font-family: "Arial";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.2px;

  color: #8b96a5;
`;
export const CartBtns = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 10px;
  margin-bottom: 20px;
`;

export const RemoveBtn = styled.button`
  background: #ffffff;
  font-family: "Arial";
  padding: 8px;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  text-align: center;
  color: #fa3434;
  border: 1px solid #e3e8ee;

  box-shadow: 0px 1px 2px rgba(56, 56, 56, 0.08);
  border-radius: 6px;
`;

export const SaveBtn = styled.button`
  background: #ffffff;
  font-family: "Arial";
  padding: 8px;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  text-align: center;
  color: #0d6efd;
  border: 1px solid #e3e8ee;

  box-shadow: 0px 1px 2px rgba(56, 56, 56, 0.08);
  border-radius: 6px;
`;
export const CartPrice = styled.p`
  position: absolute;
  top: 20px;
  left: 820px;
`;

export const QuantityProd = styled.select`
  position: absolute;
  top: 60px;
  left: 755px;
  border: none;
  outline: none;
  padding: 8px;
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  width: 120px;
`;
export const SavingProd = styled.div`
  display: flex;
  flex-direction: column;
  gap:10px;
  span {
    font-family: "Arial";
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #1c1c1c;
  }
  p {
    font-family: "Arial";
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #606060;
    width: 200px;
    height: 40px;
  }
`;
export const SavingProdimg = styled.div`
  width: 240px;
  height: 240px;
  padding: 20px;

  background: #eeeeee;
  border-radius: 6px;
`;
export const Movetocart = styled.div`
  background: #ffffff;
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  font-family: "Arial";
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #0d6efd;
  padding: 10px;
  width: 120px;
`;
