import React from "react";
import { Sub } from './style';

export const Subscribe = () => {
  return (
    <Sub>
      <h4>Subscribe on our newsletter</h4>
      <p>
        Get daily news on upcoming offers from many suppliers all over the world
      </p>
      <div>
        <input type={"email"} placeholder="Email" />
        <button type="submit">Subscribe</button>
      </div>
    </Sub>
  );
};
