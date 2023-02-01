import styled from "styled-components";

export const MayProd = styled.div`

  display: flex;
  gap: 6px;
  div p {
    width: 150px;
    font-family: "Arial";
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
margin-top: 8px;
    letter-spacing: -0.2px;

   color: ${(props) => props.theme.pallet.main};

  }

  div span {
    width: 109px;
    height: 24px;

    font-family: "Arial";

    font-weight: 400;
    font-size: 16px;
    line-height: 10px;

    letter-spacing: -0.2px;

    color: ${(props) => props.theme.pallet.grey};

  }
`;
export const ImgDiv = styled.div`
  width: 80px;
  padding: 10px;
  background: #ffffff;

  border: 1px solid #e0e0e0;
  border-radius: 6px;
  margin-top: 6px;
`;