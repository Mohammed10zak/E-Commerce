import React from "react";
import {  Sources } from "./style";

export const Source = (props) => {
  return (
    <Sources>
      <img src={props.img} alt={props.alt} />
      <p>{props.title}</p>
      <button type="submit">Source now</button>
    </Sources>
  );
};
