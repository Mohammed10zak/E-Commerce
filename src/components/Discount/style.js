import styled from "styled-components";

export const Discounts = styled.div`
  width: 1350px;
  height: 120px;
  background: #005ade;
  border-radius: 8px;
  display: flex;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 60px;
`;

export const SuperDiscount = styled.div`
  position: relative;
  width: 745px;
  height: 80px;
  border-radius: 8px;

  p {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 455px;

    font-family: "Arial";
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;

    letter-spacing: -0.2px;

    color: #ffffff;
  }

  span {
    font-family: "Arial";

    font-weight: 400;
    font-size: 16px;
    line-height: 1px;
    margin-bottom: -30px;
    color: #ffffff;
    position: absolute;
    top: 65px;
    left: 20px;
    opacity: 0.7;
    margin-bottom: 10px;
  }
`;

export const Shopnow = styled.div``;

export const ShopButton = styled.button`
  width: 121px;
  height: 40px;
  background: #ff9017;
  border-radius: 6px;
  border: none;
  color: #ffffff;
  margin-left: 440px;
  margin-top: 40px;
`;
