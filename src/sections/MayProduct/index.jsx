import React from "react";
import { ImgDiv, MayProd } from "./style";

export const MayProduct = (props) => {
  return (
    <MayProd>
      <ImgDiv>
        <img src={props.img} alt="img" />
      </ImgDiv>
      <div>
        <p>{props.title}</p>
        <span>{props.price}</span>
      </div>
    </MayProd>
  );
};
