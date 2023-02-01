import styled from "styled-components";

export const SavingProd = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  span {
    font-family: "Arial";
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: ${(props) => props.theme.pallet.main};
  }
  p {
    font-family: "Arial";
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${(props) => props.theme.pallet.grey};

    width: 200px;
    height: 40px;
  }
`;

export const SavingProdimg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 240px;
  height: 280px;

  background: #eeeeee;
  border-radius: 6px;
  img {
    margin-left: 10px;
    width: 220px;
    height: 220px;
  }
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
  width: 180px;
img {
    vertical-align: sub;
    margin-right: 6px;
}
`;
