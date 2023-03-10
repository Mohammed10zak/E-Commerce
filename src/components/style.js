import styled from "styled-components";
export const StyledImgLogo = styled.img``;
export const Settings = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const Setting = styled.div`

  & p {
    font-family: "Arial";
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;

    color: #8b96a5;
  }

  & img {
    margin-left: 6px;
    width: 20px;
    height: 20px;
  }
`;
export const StyledNav = styled.div`
  margin-top: 0;
`;

export const PaginationContainer = styled.div`
  margin: 10px 0 120px 0;
  display: flex;
  align-items: center;
  justify-content: right;
  div {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    background-color: ${(props) => props.theme.pallet.grey};

    border: 1px solid #e3e8ee;
  }
`;

export const PaginationSelect = styled.select`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
  padding: 5px;
  outline: none;
`;

export const PaginationNumber = styled.span`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  background: ${(props) =>
    props.isSelected ? props.theme.pallet.grey : props.theme.pallet.cart};
  color: ${(props) => props.theme.pallet.main};
  border: 1px solid #e3e8ee;
`;

export const LogoutBtn = styled.button`
  font-size: 14px;
  color: ${(props) => props.theme.pallet.secondary};
  background-color: #898678;

  padding: 10px;
  border-radius: 20px;
  border: none;
  margin-top: -5px;
  cursor: pointer;
`;

export const LogoutImg = styled.img`
  width: 20px;
  height: 20px;
  vertical-align: middle;
  margin-left: 5px;
`;
