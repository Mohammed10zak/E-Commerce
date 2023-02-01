import React from "react";
import { Imgdiv, RelatedProduct } from "./style";

export const RelatedProducts = (props) => {
  return (
    <RelatedProduct>
      <Imgdiv>
        <img src={props.img} alt="img" />
      </Imgdiv>
      <div>
        <p>{props.title}</p>
        <span>{props.price}</span>
      </div>
    </RelatedProduct>
  );
};
