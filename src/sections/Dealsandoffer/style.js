import styled from "styled-components";

export const Dealoffer = styled.div`
    width: 198px;
  height: 100px;

  p {
    margin-top:10px;
    font-size: 16px;
    text-align: center;
    color: #ffffff;
    line-height:0.5px;
  }

  span {
    display:block;
    font-size: 12px;
    text-align: center;

    font-family: "Arial";
    font-weight: 400;
    font-size: 12px;
    margin-left: 10px;
    color: #ffffff;
  }
`;

export const Clndr = styled.div`
  display: flex;
  gap: 10px;
`;
export const Timeclndr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  width: 80px;
  height: 60px;
  background: #606060;
  border-radius: 4px;
  span {
    text-align: left;
  }
`;

export const Dealp = styled.div`
  width: 155px;

  font-family: "Arial";
  line-height: 39px;

  color: ${(props) => props.theme.pallet.main};

  &::first-line {
    font-family: "Arial";
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: -0.2px;
    color: ${(props) => props.theme.pallet.main};

  }

  &::second-line {
    font-style: "Arial";
    font-weight: 400;
    font-size: 20px;
    line-height: 19px;
  }
`;


