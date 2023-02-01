import styled from "styled-components";

export const Footerform = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  gap: 720px;
  padding: 20px 0;
  background-color: ${(props) => props.theme.pallet.secondary};
  position: relative;
   bottom: 1;
   width: 100%;
  ul {
    display: flex;
    gap: 20px;
    list-style-type: none;
    color: ${(props) => props.theme.pallet.grey};

  }
`;
