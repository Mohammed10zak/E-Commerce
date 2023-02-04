import styled from "styled-components";

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 200px;
  margin-left: 75px;
  margin-right: 10px;

  p {
    font-size: 16px;
    line-height: 19px;
    font-family: "Arial";
    font-weight: 600;

    color: ${(props) => props.theme.pallet.main};
  }
  label {
    font-size: 19px;
    margin-left: 10px;
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const Accordion = styled.div`
  background-color: none;
  border-bottom: 1px solid #779;
`;

export const StyledAccordionTitle = styled.div`
  background-color: ${(props) =>
    props.isActive ? props.theme.pallet.page : props.theme.pallet.cart};
  padding: 1rem;
  cursor: pointer;
  border-radius: 5px;
`;

export const StyledAccordionContent = styled.div`
  display: ${(props) => (props.isActive ? "block" : "none")};
  padding: 0.5rem;
`;

export const Brands = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-bottom: 1px solid #779;
  font-size: 19px;

  height: 250px;
`;

export const Features = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-bottom: 1px solid #779;
  height: 250px;
`;

export const Pricerange = styled.div`
  width: 200px;
  padding-top: 20px;
  border-bottom: 1px solid #779;
  height: 220px;

  p {
    font-size: 16px;
    line-height: 19px;
    font-family: "Arial";

    color: ${(props) => props.theme.pallet.main};
  }
  button {
    width: 180px;
    margin-top: 10px;
    background: #ffffff;
    border: 1px solid #e3e8ee;

    box-shadow: 0px 1px 2px rgba(56, 56, 56, 0.08);
    border-radius: 6px;
    padding: 10px;

    font-family: "Arial";
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #0d6efd;
  }
`;

export const Labels = styled.div`
  display: flex;
  margin-left: -20px;
  gap: 60px;
  padding: 10px;

  font-family: "Arial";
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: ${(props) => props.theme.pallet.main};
`;

export const Inputs = styled.div`
  display: flex;
  gap: 20px;
  input {
    width: 80px;
    border: 1px solid #e3e8ee;
    border-radius: 6px;
    padding: 10px;
    outline: none;
  }
`;
export const Condition = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-bottom: 1px solid #779;
  height: 220px;
`;

export const Ratings = styled.div`
  margin-bottom: 20px;
  input {
    margin-right: 10px;
  }
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
