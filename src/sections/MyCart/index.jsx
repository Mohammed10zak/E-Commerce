import React from "react";

//styled components
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

export const MyCart = ({ product, onRemove  }) => {

  
  return (
    <Cartt>
      <Imgcart>
        <img src={product.ImgCard} alt="imgcart" />
      </Imgcart>
      <CartInfo>
        <CartTitle>{product.ElectronicTitleCard}</CartTitle>
        <Cartdesc>{product.descriptionCard}</Cartdesc>
        <CartBtns>
          <RemoveBtn onClick={() => onRemove(product.id)}>Remove</RemoveBtn>
          <SaveBtn >Save for later</SaveBtn>
        </CartBtns>
      </CartInfo>
      <CartPrice>{product.ElectronicPriceCard}</CartPrice>
      <QuantityProd>
        <option>Qty</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5 </option>
      </QuantityProd>
    </Cartt>
  );
};
