import styled from "styled-components";

export const ImgTheme = styled.button`
  border: none;
  border-radius: 20px;
  background: none;

  img {
    border-radius: 20px;
    border: 1px solid ${(props) => props.theme.pallet.main};
    width: 40px;
    height: 40px;
    background-color: ${(props) => props.theme.pallet.grey};
  }
`;
