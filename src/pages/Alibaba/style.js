import styled from "styled-components";


export const BGCard = styled.div`
  background-color: ${(props) => props.theme.pallet.cart};

  width: 1350px;
  height: 420px;
  display: flex;
  justify-content: center;
  margin: 20px auto;
  border: 1px solid #e3e8ee;
  border-radius: 6px;

  div {
    position: relative;
  }
  img {
    width: 820px;
    height: 410px;
  }
`;
export const Trending = styled.p`
  position: absolute;
  width: 253px;
  height: 39px;
  left: 120px;
  top: 50px;

  font-family: "Arial";
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;

  &::first-line {
    font-weight: 300;
  }
  &::second-line {
    font-weight: bold;
  }
`;
export const LearnButton = styled.button`
  position: absolute;
  left: 120px;
  top: 150px;
  padding: 10px;
  border: none;

  background: #ffffff;
  border-radius: 6px;
  font-weight: bold;
`;

export const Mainul = styled.ul`
  list-style-type: none;
  li {
    width: 240px;
    height: 35px;

    text-align: left;
    padding: 10px;
    margin-top: 8px;
    border-radius: 6px;

    &:hover {
      background: #e5f1ff;
      color: ${(props) => props.theme.pallet.page};
      color:black;
    }
  }
`;

export const Loguser = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
export const Userdiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  align-items: center;
  margin-top: 10px;
  width: 220px;
  height: 170px;

  background: #e3f0ff;
  border-radius: 6px;
`;

export const Userinfo = styled.div`
  display: flex;
  justify-content: space-around;
  img {
    margin: 1px 0 0 8px;
    width: 70px;
    height: 70px;
  }
  p {
    margin: 10px 0 0 2px;
    color: black;
  }
`;

export const Joinbutton = styled.button`
  width: 170px;
  height: 30px;
  padding: 6px;
  color: #ffffff;
  background: linear-gradient(180deg, #127fff 0%, #0067ff 100%);
  border: 1px solid #0d6efd;
  border-radius: 6px;
  border: none;
`;

export const GoLogButton = styled.button`
  width: 170px;
  height: 30px;

  padding: 6px;

  background: #ffffff;
  border: 1px solid #e3e8ee;
  border-radius: 6px;
`;

export const Sales = styled.div`
  padding: 10px;
  background-color: ${(props) => (!props.pColor ? "#55BDC4" : "#f38332")};

  border-radius: 6px;
  width: 220px;
  height: 100px;

  p {
    width: 130px;
    font-size: 16px;
    color: #000;
    text-align: left;
    font-family: "Arial";
    color: #ffffff;
  }
`;

export const Dailyoffers = styled.div`
  background-color: ${(props) => props.theme.pallet.cart};

  padding: 10px;
  width: 1350px;
  height: 240px;

  margin: 0 auto;
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  display: flex;
  justify-content: space-around;
`;

export const Marketing = styled.div`
  position: relative;
  display: flex;
  width: 1350px;
  height: 302px;
  margin: 20px auto;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
`;

export const ProductContainer = styled.div`
  display: flex;
`;
export const Recommendeditems = styled.div`
  h2 {
    margin-top: 80px;

    font-family: "Arial";
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
  }
  margin-top: 20px;
  width: 1350px;
  margin: 0 auto;
`;

export const ItemContainer = styled.div`
  display: flex;
  gap: 20px;
`;
export const Services = styled.div`
  margin: 20px auto;
  width: 1350px;
  display: flex;
  flex-direction: column;

  h3 {
    font-family: "Arial";
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.2px;

    color: ${(props) => props.theme.pallet.main};
  }
`;

export const AllServices = styled.div`
  display: flex;
  gap: 40px;
`;

export const Suppliers = styled.div`
  h3 {
    font-family: "Arial";
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;

    letter-spacing: -0.2px;
    margin-bottom: 40px;
    color: ${(props) => props.theme.pallet.main};
  }
  padding: 16px 0;
  width: 1340px;
  margin: 0 auto;
`;

export const AllSuppliers = styled.div`
  display: flex;
  justify-content: space-between;
`;
