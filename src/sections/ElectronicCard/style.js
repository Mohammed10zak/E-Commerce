import styled from "styled-components";

export const Cardelectronic = styled.div`
  background-color: ${(props) => props.theme.pallet.cart};

  font-family: "Arial";
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 320px;
  height: 430px;

  border: 1px solid #e3e8ee;

  border-radius: 6px;
  margin-bottom: 20px;
`;

export const ImgElediv = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;

  width: 320px;
  height: 220px;
  /* padding: 20px 0; */

  border-bottom: 1px solid #eff2f4;

  img {
    width: 220px;
    height: 180px;
  }
`;

export const  About =styled.div`
width: 100px;
height: 100px;
display: flex;
flex-direction: column;
gap:10px;
padding:16px;
`

export const ElectronicPriceCard = styled.h5`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  
   color: ${(props) => props.theme.pallet.main};

`;

export const ElectronicTitleCard = styled.p`
  width: 200px;
  height: 220px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  letter-spacing: -0.2px;

  color: ${(props) => props.theme.pallet.grey};

`;

export const Elelike = styled.img`
  position: absolute;
  left: 270px;
  top: 290px;
`;
