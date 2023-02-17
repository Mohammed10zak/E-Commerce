import styled from "styled-components";

export const RelatedProduct = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  
    
  div {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  p {
    font-family: "Arial";
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    width: 140px;
    color: ${(props) => props.theme.pallet.main};
  }

  span {
    font-family: "Arial";
    font-weight: 400;
    font-size: 16px;
    line-height: 10px;
    color: ${(props) => props.theme.pallet.grey};
  }
`;

export const Imgdiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 8px;
  width: 165px;
  height: 165px;
  background: #eeeeee;
  border-radius: 6px;
  img {
    padding: 8px;
  }
`;
