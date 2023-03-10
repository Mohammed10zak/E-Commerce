import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledOR = styled.div`
  font-size: 18px;
  font-family: "Arial";
  margin-top: 10px;
  display: flex;
  justify-content: center;
  div {
    width: 145px;
    background-color: #a9acb0;
    height: 2px;
    margin-top: 10px;
    box-shadow: 0px 3px 10px rgba(32, 32, 32, 0.1);
    border-radius: 6px;
  }
  span {
    color: #a9acb0;
    padding: 0 5px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    div {
      width: 120px;
    }
  }
`;

export const ShowPassword = styled.img`
  position: absolute;
  width: 18px;
  height: 18px;

  top: 45px;
  left: 300px;
  cursor: pointer;

  @media (max-width: 768px) {
    left: 250px;
  }
`;

export const AlredyAccount = styled.div`
  font-family: "Arial";
  font-size: 18px;
  color: #a9acb0;

  margin: auto;
  margin-top: 10px;

  text-decoration: none;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #0d6efd;
  &:hover {
    color: #0d6efd;
  }
`;

export const StyledImg = styled.img`
  height: 20px;
  width: 20px;
  margin-right: -10px;
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  gap: 85px;
  padding: 10px 20px;
  color: #606060;
  cursor: pointer;
  background-color: ${(props) => (!props.facebook ? "#3b5998" : "#ffffff")};
  color: ${(props) => (!props.facebook ? "#ffffff" : "#222")};

  border: none;
  box-shadow: 0px 1px 3px rgba(56, 56, 56, 0.1);
  border-radius: 6px;
  font-size: 16px;

  @media (max-width: 768px) {
    gap: 60px;
    font-size: 14px;
  }
`;
export const StyledLinkhome = styled(Link)`
  text-decoration: none;
  color: #ffffff;
`;

export const FormFootersignin = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;

  @media (max-width: 768px) {
    position: static;
  }
`;
