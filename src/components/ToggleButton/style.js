import styled from "styled-components";

export const ImgTheme = styled.button`
  border: none;
  border-radius: 20px;
  background: none;
  img {
    border-radius: 50%;
    width: 20px;
    height: 20px;
    background-color: ${(props) => props.theme.pallet.grey};
  }
`;
