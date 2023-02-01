import styled from "styled-components";
export const StyledNavCart = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 800px;

  padding: 10px;
  background-color: ${(props) => props.theme.pallet.secondary};
`;

export const CartPage = styled.div`
  width: 1350px;
  margin: 20px auto;

  h3 {
    width: 127px;
    height: 32px;

    font-family: "Arial";
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;

    letter-spacing: -0.2px;

    color: ${(props) => props.theme.pallet.main};
  }
`;

export const SillCart = styled.div`
  display: flex;
  gap: 20px;
`;

export const AllCarts = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 990px;
  height: 700px;
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  background-color: ${(props) => props.theme.pallet.cart};
`;

export const AllCartsBtns = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BackBtn = styled.button`
  img {
    vertical-align: middle;
    margin-right: 10px;
  }
  background: linear-gradient(180deg, #127fff 0%, #0067ff 100%);
  border: 1px solid #0d6efd;
  border-radius: 6px;
  padding: 10px;
  font-family: "Arial";
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  color: #ffffff;
`;
export const TaxandCoupon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const Coupon = styled.div`
  padding: 25px;
  width: 300px;
  height: 120px;

  background: #ffffff;
  border: 1px solid #e3e8ee;
  border-radius: 6px;

  label {
    font-family: "Arial";
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #505050;
  }
`;
export const Addcoupon = styled.input`
  background: #ffffff;
  border: 1px solid #e0e0e0;
  padding: 6px;
  margin-top: 10px;
  outline: none;
`;
export const ApplyBtn = styled.button`
  font-weight: 500;
  font-size: 16px;
  text-align: center;

  color: #0d6efd;

  background: #ffffff;
  border: 1px solid #e3e8ee;
  padding: 5px;

  border-radius: 6px;
`;
export const Total = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 380px;
  gap: 30px;
  padding: 20px;
  background: #ffffff;
  border: 1px solid #e3e8ee;
  box-shadow: 0px 4px 10px rgba(56, 56, 56, 0.1);
  border-radius: 6px;
`;

export const Avg = styled.div`
  border-bottom: 1px solid #e3e8ee;
  margin-bottom: 10px;
`;
export const Subtotal = styled.div`
  font-family: "Arial";
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.2px;
  color: #505050;

  span {
    text-align: right;
    letter-spacing: -0.2px;

    color: #505050;
    margin-left: 120px;
  }
`;
export const Discounts = styled.div`
  font-family: "Arial";

  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.2px;
  color: #505050;

  span {
    text-align: right;
    letter-spacing: -0.2px;

    color: #fa3434;
    margin-left: 115px;
  }
`;
export const Tax = styled.div`
  font-family: "Arial";
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.2px;

  color: #505050;
  margin-bottom: 10px;

  span {
    width: 30px;
    text-align: right;
    letter-spacing: -0.2px;

    color: #00b517;
    margin-left: 148px;
  }
`;

export const AllTotal = styled.div`
  font-family: "Arial";

  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.2px;

  color: #505050;
  span {
    margin-left: 140px;
  }
`;
export const CheckoutBtn = styled.button`
  padding: 20px;
  width: 240px;
  border: none;
  background: #00b517;
  border-radius: 8px;
  padding: 20px 0;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  margin: 5px;
  margin-bottom: 20px;
  color: #ffffff;
  cursor: pointer;
`;

export const Paymethods = styled.div`
  margin-left: 10px;
  display: flex;
  gap: 25px;
  width: 280px;
  height: 10px;
`;

export const Inquires = styled.div`
  display: flex;
  gap: 90px;
  margin: 20px 0;
`;

export const Inquire = styled.div`
  div p {
    font-family: "Arial";
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.2px;
    color: ${(props) => props.theme.pallet.main};
  }

  div span {
    font-family: "Arial";
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.2px;
    color: ${(props) => props.theme.pallet.grey};
  }
  display: flex;
  gap: 10px;
`;

export const Inquireimg = styled.div`
  width: 50px;
  height: 52px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  border-radius: 50px;
  background: #e3e8ee;
`;

export const AllSavingProducts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 30px;
  height: 520px;
  width: 1350px;
  margin: 0 auto;
  background-color: ${(props) => props.theme.pallet.cart};

  border: 1px solid #e3e8ee;
  border-radius: 6px;
  h4 {
    font-family: "Arial";
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: -0.2px;
    color: ${(props) => props.theme.pallet.main};
  }
`;

export const SavingProducts = styled.div`
  display: flex;
  justify-content: space-around;
`;
