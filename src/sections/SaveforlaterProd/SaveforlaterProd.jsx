import React from "react";
import cart from "../../Images/cart.png";
import { Movetocart, SavingProd, SavingProdimg } from "./style";
export const SaveforlaterProd = (props) => {
  return (
    <SavingProd>
      <SavingProdimg>
        <img src={props.img} alt="img" />
      </SavingProdimg>
      <div>
        <span>{props.price}</span>
        <p>{props.title}</p>
      </div>
      <Movetocart>
        <img src={cart} alt="move to cart" />
        Move to cart
      </Movetocart>
    </SavingProd>
  );
};
