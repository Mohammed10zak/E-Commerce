import React from "react";
import likCard from "./../Images/likeCard.png";

import {
  CardDesc,
  Cardlike,
  Cardstrore,
  ImgCard,
  ImgCarddiv,
  InfoCard,
  Orders,
  PriceCard,
  Rating,
  Shipping,
  TitleCard,
} from "./style";
import { StyledLink } from "./../pages/Signup/style";

export const StroeCard = (props) => {
  return (
    <Cardstrore>
      <ImgCarddiv>
        <ImgCard src={props.ImgCard} alt="Card Img" />
      </ImgCarddiv>
      <div>
        <TitleCard>{props.TitleCard}</TitleCard>
        <PriceCard>{props.PriceCard}</PriceCard>
        <InfoCard>
          <Rating>
            
            7.5</Rating>
          <Orders>154 orders</Orders>
          <Shipping>Free Shipping</Shipping>
        </InfoCard>
        <CardDesc>{props.descriptionCard}</CardDesc>
        <StyledLink>View details</StyledLink>
        <Cardlike src={likCard} alt="likeCard" />
      </div>
    </Cardstrore>
  );
};
