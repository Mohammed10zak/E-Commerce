import React from "react";

//styled components
import {
  AboutList,
  AddRemoveBtn,
  CardDesc,
  Cardlike,
  Cardstore,
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

//images
import likCard from "../../Images/likeCard.png";
import addtocart from "../../Images/addtocart.png";
import deletefromcart from "../../Images/deletecart.png";

//context
import { useProductContext } from "../../context/productContext";

export const StoreCard = ({ product }) => {
  const {
    state: { electronicCardsData },
    addToCart,
    removeFromCart,
  } = useProductContext();

  //  checking if the product exists in the electronicCardsData 
  const isExistInCart = () =>
    electronicCardsData.find((item) => item.id === product.id);
    
//adding or removing the product from the cart based on its current state
  const toggleCart = () => {
    isExistInCart() ? removeFromCart(product.id) : addToCart(product);
  };

  return (
    <Cardstore>
      <ImgCarddiv>
        <ImgCard src={product.ImgCard} alt="Card Img" />
      </ImgCarddiv>
      <AboutList>
        <TitleCard>{product.ElectronicTitleCard}</TitleCard>
        <PriceCard>{product.ElectronicPriceCard}</PriceCard>
        <InfoCard>
          <Rating>7.5</Rating>
          <Orders>154 orders</Orders>
          <Shipping>Free Shipping</Shipping>
        </InfoCard>
        <CardDesc>{product.descriptionCard}</CardDesc>
        <StyledLink>View details</StyledLink>
        <Cardlike src={likCard} alt="likeCard" />
        <AddRemoveBtn onClick={toggleCart}>
          {isExistInCart() ? (
            <img alt="remove" src={deletefromcart} />
          ) : (
            <img alt="add" src={addtocart} />
          )}
        </AddRemoveBtn>
      </AboutList>
    </Cardstore>
  );
};
