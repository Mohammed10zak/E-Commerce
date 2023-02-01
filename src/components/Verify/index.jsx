import React from "react";
import {  NavLink } from "react-router-dom";
import btn1 from "../../Images/btn1.png";
import btn2 from "../../Images/btn2.png";

import { Verifysec } from "./style";

function Verify() {
  return (
    <Verifysec>
      <p>12,911 items in Mobile accessory</p>
      <div>
        <div>
          <input type="radio" id="verify" />
          <label htmlFor="verify">Verified only</label>
        </div>
        <div>
          <select>
            <option>Featured</option>
          </select>
        </div>
        <div>
          <NavLink to="/electronic">
            <img src={btn2} alt="btn2" />
          </NavLink>
          <NavLink to="/techstorelist">
            <img src={btn1} alt="btn1" />
          </NavLink>
        </div>
      </div>
    </Verifysec>
  );
}

export default Verify;
