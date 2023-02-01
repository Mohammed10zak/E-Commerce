import React from "react";
import { Offer } from "./style";


export const Offers = (props) => {
  return (
    <Offer>
        <div>

      <img src={props.img} alt={props.alt} />
        </div>
      <p>{props.title}</p>
      <span>{props.discount}</span>
      </Offer>
  );
};
