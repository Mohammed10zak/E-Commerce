import React from "react";
import likCard from "./../Images/likeCard.png";

import {
  Cardelectronic,
  ElectronicPriceCard,
  ElectronicTitleCard,
  Elelike,
  ImgElectronicCard,
  ImgElediv,
  Rating,
} from "./style";

export const ElectronicCard = (props) => {
  return (
    <Cardelectronic>
      <ImgElediv>
        <ImgElectronicCard src={props.ImgCard} alt="Card Img" />
      </ImgElediv>
      <div>
        <ElectronicPriceCard>{props.ElectronicPriceCard}</ElectronicPriceCard>
        <Rating>7.5</Rating>
        <Elelike src={likCard} alt="likeCard" />
        <ElectronicTitleCard>{props.ElectronicTitleCard}</ElectronicTitleCard>
      </div>
    </Cardelectronic>
  );
};
