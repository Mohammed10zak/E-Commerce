import styled from "styled-components";

export const Cartt = styled.div`
  position: relative;
  display: flex;
  gap: 10px;
  width: 900px;
  height: 170px;
  border-bottom: 1px solid #e3e8ee;
`;
export const Imgcart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  height: 100px;
  width: 100px;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #e0e0e0;
  background: #f7f7f7;
`;
export const CartInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CartTitle = styled.p`
  font-family: "Arial";
  font-weight: 500;
  font-size: 16px;
  color: ${(props) => props.theme.pallet.main};

  margin: 8px 0;    
`;
export const Cartdesc = styled.span`
  width: 280px;
  font-family: "Arial";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.2px;

  color: ${(props) => props.theme.pallet.grey};
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

export const CartPrice = styled.p`
  position: absolute;
  top: 20px;
  left: 850px;
`;

export const QuantityProd = styled.select`
  position: absolute;
  top: 60px;
  left: 780px;
  border: none;
  outline: none;
  padding: 8px;
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  width: 120px;
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