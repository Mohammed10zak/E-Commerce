import React from "react";
import {  IconImg, SerImg, ServiceCart } from "./style";

export const Service = (props) => {
  return (
    <ServiceCart>
      <SerImg src={props.Serimg} alt={props.alt} />
      <p>{props.Sertitle}</p>

      <IconImg src={props.icon} alt={props.alticon} />
    </ServiceCart>
  );
};
