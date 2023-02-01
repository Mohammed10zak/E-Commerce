import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  transition: all 0.5s;
  background-color: ${(props) => props.theme.pallet.page};
  color: ${(props) => props.theme.pallet.main};

}
`;
