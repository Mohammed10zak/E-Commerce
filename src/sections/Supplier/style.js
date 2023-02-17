import styled from "styled-components";

export const SupplierRegion = styled.div`
  display: flex;
  width: 220px;
  padding: 10px;
  gap: 20px;
  img {
    width: 45px;
  }

  & p {
    font-family: "Arial";
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.2px;
    color: ${(props) => props.theme.pallet.main};
  }

  span {
    font-family: "Arial";
    font-weight: 400;
    font-size: 13px;
    line-height: 10px;

    color: ${(props) => props.theme.pallet.main};
  }
`;
