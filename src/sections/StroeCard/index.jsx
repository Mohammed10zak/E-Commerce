import React from "react";
import likCard from "../../Images/likeCard.png";

import {
  AboutList,
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
import { StyledLink } from "../../pages/Signin/style";

export const StroeCard = (props) => {
  return (
    <Cardstrore>
      <ImgCarddiv>
        <ImgCard src={props.ImgCard} alt="Card Img" />
      </ImgCarddiv>
      <AboutList>
        <TitleCard>{props.TitleCard}</TitleCard>
        <PriceCard>{props.PriceCard}</PriceCard>
        <InfoCard>
          <Rating>7.5</Rating>
          <Orders>154 orders</Orders>
          <Shipping>Free Shipping</Shipping>
        </InfoCard>
        <CardDesc>{props.descriptionCard}</CardDesc>
        <StyledLink>View details</StyledLink>
        <Cardlike src={likCard} alt="likeCard" />
      </AboutList>
    </Cardstrore>
  );
};
