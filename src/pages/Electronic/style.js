import styled from "styled-components";

export const ElectronicCards = styled.div`

  display: flex;
  flex-wrap: wrap;
  width: 1042px;
  gap: 40px;
  margin: 20px 0 10px 5px;
`;

export const AllKinds = styled.div`
  width: 850px;
  height: 20px;

  display: flex;
  gap: 10px;

  padding: 10px;
  margin-bottom: 30px;
`;

export const Fillters = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 9px;
  margin-bottom: 20px;
  padding: 12px 6px;

  width: 90px;
  height: 15px;

  color: ${(props) => props.theme.pallet.main};

  border: 1px solid #0d6efd;
  border-radius: 5px;
`;
