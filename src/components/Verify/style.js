import styled from "styled-components";

export const Verifysec = styled.div`
    font-family: "Arial";

  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 1040px;
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  margin-left: 5px;
  background-color: ${(props) => props.theme.pallet.cart};

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    padding: 22px;
    color: ${(props) => props.theme.pallet.main};
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 6px 16px 6px 0px;
  }
  label{
    margin-left: 5px;
  }

  select {
    width: 140px;

    padding: 6px;

    font-weight: 400;
    font-size: 16px;

    border: 1px solid #e3e8ee;
    border-radius: 6px;
    outline: none;
    background: transparent;
    color: ${(props) => props.theme.pallet.main};
  }

`;
