import styled from "styled-components";

export const StyledNav = styled.div``;
export const StyledNav1 = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const StyledImgLogo = styled.img``;

export const Search = styled.div`
  input {
    width: 421px;
    padding: 10px;
    background: #ffffff;
    border: 1px solid #0d6efd;
    outline: none;
  }
  select {
    width: 145px;
    padding: 9.7px;
    background: #ffffff;
    border: 1px solid #0d6efd;
    outline: none;
  }

  button {
    width: 100px;
    height: 40px;
    background: linear-gradient(180deg, #127fff 0%, #0067ff 100%);
    color: #ffffff;
    font-family: "Arial";
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    border: 1px solid #0d6efd;
    border-radius: 5px;
  }
`;

export const Settings = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 25px;
`;

export const Setting = styled.div`
  p {
    font-family: "Arial";
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;

    display: flex;
    align-items: center;
    text-align: center;

    color: #8b96a5;
  }

  img {
    width: 20px;
    height: 19px;
  }
`;

export const StyledNav2 = styled.div`
  display: flex;

  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
  gap: 420px;
`;

export const UL = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 20px;

  align-items: center;
  padding: 0;
  margin: 0;
  font-family: "Arial";
  font-size: 16px;
  img {
    margin-right: 10px;
  }

  select {
    border: none;
    font-size: 16px;
  }
`;
export const Lang = styled.div`
  select {
    margin-left: 20px;
    border: none;
    font-size: 16px;
  }
`;

export const Sub = styled.form`
  height: 200px;
  padding: 10px;
  margin: 0 auto;
  background: #eff2f4;
  h4 {
    font-family: "Arial";
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;

    text-align: center;
    letter-spacing: -0.2px;
    color: #1c1c1c;
  }

  p {
    font-family: "Arial";
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;

    text-align: center;
    letter-spacing: -0.2px;

    color: #606060;
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
  }

  button {
    background: linear-gradient(180deg, #127fff 0%, #0067ff 100%);
    border: 1px solid #0d6efd;
    border-radius: 6px;
    color: #ffffff;
    padding: 10px;
  }
`;
export const Foot1 = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 14px;
  p {
    width: 276px;
    height: 48px;

    font-family: "Arial";
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.2px;

    color: #505050;
  }

  ul {
    list-style: none;
    font-family: "Arial";
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;

    color: #1c1c1c;
  }

  li {
    font-family: "Arial";
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.2px;
    padding-top: 8px;

    color: #8b96a5;
  }

  ul div {
    background: #000000;
    border-radius: 6px;
    padding: 10px;
    margin-top: 10px;
  }
`;

export const Icon = styled.img`
  width: 30px;
  height: 30px;
`;
export const Icons = styled.div`
  display: flex;
  gap: 20px;
`;

export const Foot2 = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  gap: 900px;
  background: #eff2f4;

  p {
    border-top: 1px solid #e3e8ee;

    font-family: "Arial";
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    letter-spacing: -0.2px;

    color: #606060;
  }

  div {
    padding: 10px;
  }
  div img {
    width: 28px;
    height: 20px;
    vertical-align: sub;
  }

  div select {
    background: #eff2f4;

    outline: none;
    border: none;
    padding: 10px;
  }
`;

export const Sidebar = styled.div`
  width: 200px;
  margin-left: 75px;
  margin-top: 30px;
  p {
    font-size: 16px;
    line-height: 19px;
    font-family: "Arial";
    font-weight: 600;

    color: #1c1c1c;
  }
`;

export const Accordion = styled.div`
  background-color: transparent;
  border-bottom: 1px solid #779;
`;

export const AccordionTitle = styled.div`
  padding: 10px;
  cursor: pointer;

  font-family: "Arial";
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  background-color: transparent;
`;

export const AccordionContent = styled.div`
  background-color: transparent;
  font-family: "Arial";
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  padding: 10px;
  display: none;
`;

export const Brands = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-bottom: 1px solid #779;
`;

export const Features = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-bottom: 1px solid #779;
`;

export const Pricerange = styled.div`
  width: 200px;
  padding-top: 20px;

  p {
    font-size: 16px;
    line-height: 19px;
    font-family: "Arial";

    color: #1c1c1c;
  }
  button {
    width: 180px;
    margin-top: 10px;
    background: #ffffff;
    border: 1px solid #e3e8ee;

    box-shadow: 0px 1px 2px rgba(56, 56, 56, 0.08);
    border-radius: 6px;
    padding: 10px;

    font-family: "Arial";
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #0d6efd;
  }
`;

export const Labels = styled.div`
  display: flex;
  gap: 100px;
  padding: 10px;

  font-family: "Arial";
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #1c1c1c;
`;

export const Inputs = styled.div`
  display: flex;
  gap: 20px;
  input {
    width: 60px;
    border: 1px solid #e3e8ee;
    border-radius: 6px;
    padding: 10px;
    outline: none;
  }
`;
export const Condition = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-bottom: 1px solid #779;
`;

export const Ratings = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Verifysec = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 1120px;
  height: 40px;
  padding: 10px;
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  margin-left: 5px;
  margin-top: 30px;
  p {
    margin-top: 10px;
    font-family: "Arial";
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: #1c1c1c;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 6px 16px 6px 0px;
  }

  select {
    outline: none;
    padding: 10px;
    font-family: "Arial";
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    border: 1px solid #e3e8ee;
    border-radius: 6px;
    color: #1c1c1c;
  }
`;

export const Discounts = styled.div`
  width: 1340px;
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
    top: 3px;
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
    top: 70px;
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
