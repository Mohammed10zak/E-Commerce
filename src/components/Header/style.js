import styled from "styled-components";

export const StyledHeader = styled.header``;

export const StyledNav1 = styled.div`
  img {
    @media only screen and (max-width: 768px) {
      margin-right: 290px;
    }
  }
  background: ${(props) => props.theme.pallet.secondary};
  padding: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 2px solid #e3e8ee;
`;

export const Search = styled.div`
  input {
    width: 421px;
    padding: 10px;
    background: #ffffff;
    border: 1px solid #0d6efd;
    outline: none;
  }
  select {
    width: 145px;
    padding: 9.7px;
    background: #ffffff;
    border: 1px solid #0d6efd;
    border-left: none;
    outline: none;
  }

  button {
    width: 100px;
    height: 38px;
    background: linear-gradient(180deg, #127fff 0%, #0067ff 100%);
    color: #ffffff;
    font-family: "Arial";
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    border: 1px solid #0d6efd;
    border-radius: 5px;
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
export const Settings = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;
`;

export const Setting = styled.div`
  p {
    font-family: "Arial";
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;

    display: flex;
    align-items: center;
    text-align: center;

    color: #8b96a5;
  }

  img {
    width: 20px;
    height: 19px;
  }
`;
export const StyledNav2 = styled.div`
  background: ${(props) => props.theme.pallet.secondary};
  padding: 20px 0;
  display: flex;

  justify-content: space-around;
  align-items: center;
  margin-bottom: 50px;
  gap: 380px;
`;

export const UL = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 20px;

  align-items: center;
  padding: 0;
  margin: 0;
  font-family: "Arial";
  font-size: 16px;
  img {
    margin-right: 10px;
  }

  select {
    border: none;
    outline: none;

    font-size: 16px;
    background: transparent;
    color: ${(props) => props.theme.pallet.main};
  }

`;
export const Lang = styled.div`
  select {
    margin-left: 20px;
    border: none;
    outline: none;
    font-size: 16px;
    background: transparent;
    color: ${(props) => props.theme.pallet.main};
  }
`;
