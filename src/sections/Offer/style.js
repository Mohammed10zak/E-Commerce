import styled from "styled-components";

export const Offer = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  background: transparent;
img{
   
}
  div {
display: flex;
justify-content: center;

    width: 140px;
height : 125px;
  }
  p {
    font-family: "Arial";
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin-top: 15px;
    letter-spacing: -0.2px;

    color: ${(props) => props.theme.pallet.main};

  }

  span {
    width: 50px;
    padding: 10px;
    margin: 0 auto;
    background: #ffe3e3;
    border-radius: 29px;
    color: ${(props) => props.theme.pallet.main};
    color: black;
  }
`;