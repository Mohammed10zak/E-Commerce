import styled from "styled-components";

export const Foot1 = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  background: ${(props) => props.theme.pallet.secondary};
  border-bottom: 2px solid #789;
  p {
    width: 276px;
    height: 48px;

    font-family: "Arial";
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.2px;
    margin-top: 20px;

    color: ${(props) => props.theme.pallet.main};
  }

  ul {
    list-style: none;
    font-family: "Arial";
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;

    color: ${(props) => props.theme.pallet.main};
  }

  li {
    font-family: "Arial";
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.2px;
    padding-top: 12px;

    color: ${(props) => props.theme.pallet.grey};
  }

  ul div {
    background: #000000;
    border-radius: 6px;
    padding: 10px;
    margin-top: 10px;
  }
  @media only screen and (max-width: 768px) {
      display:none;
    }
`;

export const Icon = styled.img`
  width: 30px;
  height: 30px;
`;
export const Icons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

export const Foot2 = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  gap: 900px;
  background: ${(props) => props.theme.pallet.page};

  p {
    font-family: "Arial";
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    letter-spacing: -0.2px;
    margin-top: 5px;

    color: ${(props) => props.theme.pallet.grey};
  }

  div img {
    width: 28px;
    height: 20px;
    vertical-align: sub;
  }

  div select {
    background: #eff2f4;
    background-color: transparent;
    outline: none;
    border: none;
    padding: 10px;
    color: ${(props) => props.theme.pallet.main};
  }
`;
