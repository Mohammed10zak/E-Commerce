import styled from "styled-components";
import { Link } from "react-router-dom";
export const ProdDetails = styled.div``;

export const Information = styled.div`
  margin: 0 auto;
  font-family: "Arial";
  margin-top: 20px;
  display: flex;
  padding: 40px;
  width: 1350px;
  background-color: ${(props) => props.theme.pallet.cart};

  border: 1px solid #e3e8ee;
  border-radius: 6px;
  gap: 50px;
`;

export const Clothings = styled.div`
  img {
    border: 1px solid #e3e8ee;
    border-radius: 6px;
    background-blend-mode: multiply;
  }
`;

export const Clothing = styled.div`
  width: 350px;
  height: 350px;
`;

export const SmallClothing = styled.div`
  display: flex;
  gap: 10px;
`;

export const Statistic = styled.div`
  display: flex;
  gap: 60px;
  color: #787a80;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  margin: 10px 0;

  img {
    vertical-align: middle;

    margin-right: 5px;
  }
`;

export const Description = styled.div`
  width: 900px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const Stock = styled.span`
  line-height: 24px;
  letter-spacing: -0.2px;

  color: #00b517;
`;
export const ClothisTitle = styled.h4`
  width: 384px;
  height: 56px;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: -0.2px;
  margin-top: 8px;
  color: ${(props) => props.theme.pallet.main};
`;

export const Peaces = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 20px;

  width: 430px;
  padding: 10px;
  height: 72px;
  background: #fff0df;
  color: ${(props) => props.theme.pallet.main};
`;

export const SmallPeace = styled.div`
  width: 100px;
  height: 50px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  border-right: 1px solid #bdc1c8;

  p {
    font-size: 18px;
    line-height: 2px;
    color: #fa3434;
  }
  span {
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: #787a80;
  }
`;
export const MideamPeace = styled.div`
  width: 100px;
  height: 50px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  color: #787a80;
  border-right: 1px solid #bdc1c8;

  p {
    font-size: 18px;
    line-height: 2px;
  }
  span {
    font-weight: 400;
    font-size: 13px;
    line-height: 10px;
    color: #787a80;
  }
`;
export const LargePeace = styled.div`
  padding: 10px;
  width: 100px;
  height: 50px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  color: #787a80;

  p {
    font-size: 18px;
    line-height: 2px;
  }
  span {
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: #787a80;
  }
`;

export const Price = styled.div`
  display: flex;
  gap: 90px;
  margin-bottom: 20px;
  border-bottom: 1px solid #e0e0e0;
`;

export const PTitle = styled.p`
  width: 100px;
  font-weight: 400;
  font-size: 16px;
  line-height: 10px;
  margin-bottom: 20px;

  color: ${(props) => props.theme.pallet.main};
`;
export const PDesc = styled.p`
  width: 180px;
  margin-bottom: 16px;

  font-weight: 400;
  font-size: 16px;
  color: ${(props) => props.theme.pallet.grey};
`;

export const MoreInfo = styled.div`
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 12px;
`;

export const Info = styled.div`
  display: flex;
  gap: 90px;
`;

export const SupplierProfile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 280px;
  height: 325px;
  background: #ffffff;
  border: 1px solid #e3e8ee;

  box-shadow: 0px 1px 2px rgba(56, 56, 56, 0.08);
  border-radius: 6px;
`;

export const Supplier = styled.div`
  display: flex;
  gap: 20px;
  width: 258px;
  height: 68px;
  border-bottom: 1px solid #e0e0e0;

  div {
    padding: 10px;
    width: 50px;
    height: 50px;
    text-align: center;
    font-weight: 600;
    font-size: 28px;
    line-height: 24px;
    letter-spacing: -0.2px;

    color: rgba(76, 167, 167, 0.6);
    background: #c6f3f1;
    border-radius: 4px;
  }
  p {
    width: 120px;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;

    letter-spacing: -0.2px;
    color: #1c1c1c;
  }
`;

export const SupplierInfo = styled.div`
  div {
    margin-top: 10px;
  }
  div span {
    padding: 10px;
    width: 117px;
    height: 24px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    letter-spacing: -0.2px;

    color: #8b96a5;
  }
`;
export const SentButton = styled.button`
  width: 248px;
  height: 40px;
  background: linear-gradient(180deg, #127fff 0%, #0067ff 100%);

  border: 1px solid #0d6efd;
  border-radius: 6px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #ffffff;
`;
export const SillerButton = styled.button`
  width: 248px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #e3e8ee;
  border-radius: 6px;

  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;

  color: #0d6efd;
`;

export const Save = styled.div`
  margin: 30px 0 0 90px;
  img {
    vertical-align: middle;
  }
  span {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.1px;
    color: #0d6efd;
  }
`;

export const Descriptions = styled.div`
  display: flex;
  gap: 30px;
`;
export const DescriptionProd = styled.div`
  margin: 20px 0 0 85px;
  padding: 30px;
  width: 1020px;

  height: 780px;
  background-color: ${(props) => props.theme.pallet.cart};

  border: 1px solid #e3e8ee;

  box-shadow: 0px 1px 3px rgba(56, 56, 56, 0.1);
  border-radius: 6px;
`;
export const Nav = styled.nav`
  display: flex;
  gap: 30px;

  border-bottom: 1px solid #8b96a5;
`;

export const StyleLink = styled(Link)`
  font-size: 18px;
  text-decoration: none;
  border-bottom: none;
  font-family: "Arial";
  padding: 12px 0;
  line-height: 19px;
  text-align: center;
  color: ${(props) => props.theme.pallet.grey};

  &:active {
    color: #0d6efd;
    border-bottom: 1px solid blue;
  }
`;
export const Content = styled.p`
  width: 730px;
  height: 170px;
  font-family: "Arial";
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  letter-spacing: -0.2px;
  margin-top: 10px;
  color: ${(props) => props.theme.pallet.grey};
`;

export const Preferances = styled.div`
  margin: 20px 0;
`;

export const ProductProps = styled.div`
  display: flex;
`;
export const PProps = styled.p`
  width: 200px;
  padding: 20px;
  text-align: center;
  background-color: ${(props) => props.theme.pallet.cart};

  font-family: "Arial";
  border: 1px solid #8b96a5;
`;
export const Props = styled.p`
  width: 300px;
  padding: 20px;

  text-align: left;
  font-family: "Arial";
  border: 1px solid #8b96a5;
`;

export const AdditionalFeatures = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Additional = styled.div`
  padding: 6px;
  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    letter-spacing: -0.2px;

    color: ${(props) => props.theme.pallet.main};

    margin-left: 10px;
  }
`;

export const PossipleProd = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 30px;
  margin-top: 20px;
  width: 300px;
  height: 640px;
  background-color: ${(props) => props.theme.pallet.cart};

  border: 1px solid #e3e8ee;
  border-radius: 6px;
  h4 {
    font-family: "Arial";
    font-weight: 600;
    font-size: 16px;
    line-height: 1px;
    color: ${(props) => props.theme.pallet.main};
  }
`;

export const Related = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 0 auto;
  margin-top: 20px;
  width: 1350px;
  height: 350px;

  background-color: ${(props) => props.theme.pallet.cart};

  border: 1px solid #e3e8ee;
  border-radius: 6px;
  h4 {
    font-family: "Arial";
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    padding: 10px;

    letter-spacing: -0.2px;
    color: ${(props) => props.theme.pallet.main};

  }
`;

export const AllRelated = styled.div`
  display: flex;
  justify-content: space-around;
`;
