import React from "react";
import {
  CartBtns,
  Cartdesc,
  CartInfo,
  CartPrice,
  Cartt,
  CartTitle,
  Imgcart,
  QuantityProd,
  RemoveBtn,
  SaveBtn,
} from "./style";

export const MyCart = (props) => {
  return (
    <Cartt>
      <Imgcart>
        <img src={props.img} alt="imgcart" />
      </Imgcart>
      <CartInfo>
        <CartTitle>{props.title}</CartTitle>
        <Cartdesc>{props.desc}</Cartdesc>
      <CartBtns>
        <RemoveBtn>Reomve</RemoveBtn>
        <SaveBtn>Save for later</SaveBtn>
      </CartBtns>
      </CartInfo>
      <CartPrice>{props.price}</CartPrice>
      <QuantityProd>
        <option>Qty:{props.quantity}</option>
      </QuantityProd>
    </Cartt>
  );
};
