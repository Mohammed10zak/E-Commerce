import React from "react";
import { Item } from "./style";

export const Recommendeditem = (props) => {
  return (
    <Item>
      <div><img src={props.img} alt={props.alt} /></div>
      <p>{props.price}</p>
      
      <span>{props.description}</span>
    </Item>
  );
};
