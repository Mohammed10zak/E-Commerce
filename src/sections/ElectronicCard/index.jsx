import React from "react";
import likCard from "../../Images/likeCard.png";
import { Rating } from "../StroeCard/style";

import {
  About,
  Cardelectronic,
  ElectronicPriceCard,
  ElectronicTitleCard,
  Elelike,
  ImgElediv,
  
} from "./style";

export const ElectronicCard = (props) => {
  return (
    <Cardelectronic>
      <div>
      <ImgElediv>
        <img src={props.ImgCard} alt="Card Img" />
      </ImgElediv>
      </div>
      <About>
        <ElectronicPriceCard>{props.ElectronicPriceCard}</ElectronicPriceCard>
        <Rating>7.5</Rating>
        <Elelike src={likCard} alt="likeCard" />
        <ElectronicTitleCard>{props.ElectronicTitleCard}</ElectronicTitleCard>
      </About>
    </Cardelectronic>
  );
};
