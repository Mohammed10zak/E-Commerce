import styled from "styled-components";

export const AllSettings = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  margin-top: 10px;
  @media (max-width: 768px) {
    /* apply styles for screens smaller than 768px */
    justify-content: center; /* center items horizontally */
    display: inline;
  }
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
    @media (max-width: 768px) {
    /* apply styles for screens smaller than 768px */
   display: flex;
  }
  }

  img {
    width: 20px;
    height: 19px;
  }
`;
