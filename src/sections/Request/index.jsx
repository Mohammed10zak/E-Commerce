import React from "react";
import { BgReq, Formrequest } from "./style";

import bgReq from "../../Images/bgReq.png";
export const Request = () => {
  return (
    <BgReq>
      <div>
        <img src={bgReq} alt="bgReq" />
        <h2>An easy way to send requests to all suppliers</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt.
        </p>

        <Formrequest>
          <h4>Send quote to suppliers</h4>
          <input type={"text"} placeholder="What item you need?" />
          <textarea placeholder="Type more details" />
          <div>
            <input type="text" placeholder=" Quantity" />
            <select>
              <option>Pcs</option>
              <option>100</option>
              <option>200</option>
              <option>1325</option>
              <option>457</option>
            </select>
          </div>
          <button type="submit">Send inquiry</button>
        </Formrequest>
      </div>
    </BgReq>
  );
};
