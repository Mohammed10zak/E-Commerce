import React from "react";

//styled components
import {
  About,
  AddRemoveBtn2,
  Cardelectronic,
  ElectronicPriceCard,
  ElectronicTitleCard,
  Elelike,
  ImgElediv,
} from "./style";
import {  Rating } from "../StoreCard/style";

//images
import likCard from "../../Images/likeCard.png";
import addtocart from "../../Images/addtocart.png";
import deletefromcart from "../../Images/deletecart.png";

//context
import { useProductContext } from "../../context/productContext";

export const ElectronicCard = ({ product }) => {
  const {
    state: { electronicCardsData },
    addToCart,
    removeFromCart,
  } = useProductContext();

  const isExistInCart = () =>
    electronicCardsData.find((item) => item.id === product.id);

  const toggleCart = () => {
    isExistInCart() ? removeFromCart(product.id) : addToCart(product);
  };
  return (
    <Cardelectronic>
      <div>
        <ImgElediv>
          <img src={product.ImgCard} alt="Card Img" />
        </ImgElediv>
      </div>
      <About>
        <ElectronicPriceCard>{product.ElectronicPriceCard}</ElectronicPriceCard>
        <Rating>7.5</Rating>
        <Elelike src={likCard} alt="likeCard" />
        <AddRemoveBtn2 onClick={toggleCart}>
          {isExistInCart() ? (
            <img alt="remove" src={deletefromcart} />
          ) : (
            <img alt="add" src={addtocart} />
          )}
        </AddRemoveBtn2>
        <ElectronicTitleCard>{product.ElectronicTitleCard}</ElectronicTitleCard>
      </About>
    </Cardelectronic>
  );
};
