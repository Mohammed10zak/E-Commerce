import styled from "styled-components";

export const MayProd = styled.div`
  display: flex;
  gap: 6px;
 
  div {
    p {
      font-family: "Arial";
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      margin-top: 8px;
      letter-spacing: -0.2px;
      color: ${(props) => props.theme.pallet.main};
      width: 100%;
      @media screen and (min-width: 768px) {
        width: 150px;
      }
    }

    span {
      font-family: "Arial";
      font-weight: 400;
      font-size: 16px;
      line-height: 10px;
      letter-spacing: -0.2px;
      color: ${(props) => props.theme.pallet.grey};
      width: 100%;
      height: 24px;
      @media screen and (min-width: 768px) {
        width: 109px;
      }
    }
  }
`;

export const ImgDiv = styled.div`
  width: 80px;
  padding: 10px;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  margin-top: 6px;
  @media screen and (min-width: 768px) {
    width: 120px;
  }
`;
