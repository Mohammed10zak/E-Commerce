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

  @media (max-width: 768px) {
    /* Styles for devices with a maximum width of 768px */
    body {
      font-size: 16px;
    }
  }

  @media (max-width: 480px) {
    /* Styles for devices with a maximum width of 480px */
    body {
      font-size: 14px;
    }
  }
`;
