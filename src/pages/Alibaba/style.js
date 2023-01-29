import styled from "styled-components";

export const Main = styled.div``;

export const BGCard = styled.div`
width: 1200px;
height: 420px;
  display: flex;
  justify-content: space-around;
  margin: 20px auto;
  background: #ffffff;
  border: 1px solid #e3e8ee;
  border-radius: 6px;

  div {
    position: relative;
  }
  img {
    width: 720px;
    height: 415px;
  }
`;
export const Trending = styled.p`
  position: absolute;
  width: 253px;
  height: 39px;
  left: 50px;
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
  left: 50px;
  top: 190px;
  padding: 10px;
  border: none;

  background: #ffffff;
  border-radius: 6px;
  font-weight: bold;
`;

export const Mainul = styled.ul`
  list-style-type: none;
  li {
    width: 150px;
    height: 22px;

    text-align: left;
    padding: 10px;
    border-radius: 6px;

    &:hover {
      background: #e5f1ff;
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
  width: 180px;
  height: 170px;

  background: #e3f0ff;
  border-radius: 6px;
`;

export const Userinfo = styled.div`
  display: flex;
  justify-content: space-around;
  img {
    margin: 8px 0 0 8px;
    width: 70px;
    height: 70px;
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
  width: 160px;
  height: 80px;

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
  padding: 10px;
  width: 1180px;
  height: 240px;

  background: #ffffff;

  margin: 0 auto;
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  display: flex;
  justify-content: space-around;
`;

export const Marketing = styled.div`

  display: flex;
  width: 1203px;
  height: 302px;
  margin: 20px auto;

  border: 1px solid #e0e0e0;
  border-radius: 6px;
`;
export const Sourcep = styled.p`
  position: absolute;
  width: 130px;
  height: 52px;
  left: 195px;
  top: 1200px;

  font-family: "Arial";
  font-weight: 600;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: -0.2px;
  color: #1c1c1c;
`;

export const Sourcebtn = styled.button`
  position: absolute;
  left: 190px;
  top: 1320px;

  padding: 10px;
  border-radius: 6px;
  border: none;

  font-family: "Arial";
  font-weight: 700;
  font-size: 16px;

  line-height: 19px;
  text-align: center;

  background-color: #ffffff;
  color: #1c1c1c;
`;

export const ProductContainer = styled.div`
  display: flex;
`;
export const Recommendeditems = styled.div`
  h2 {
    font-family: "Arial";
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
  }

  width: 1203px;
  margin: 0 auto;
`;

export const ItemContainer = styled.div`
  display: flex;
  gap: 20px;
`;
export const Services = styled.div`
  margin: 0 auto;
  width: 1200px;
  display: flex;
  flex-direction: column;

  h3 {
    font-family: "Arial";
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.2px;

    color: #1c1c1c;
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

    color: #1c1c1c;
  }
  width: 1200px;
  margin: 0 auto;
`;

export const AllSuppliers = styled.div`
  display: flex;
  justify-content: space-between;
`;
