import React from "react";

import logo from "../../Images/logo.svg";

import category from "../../Images/category.svg";
import almany from "../../Images/almany.svg";
import { StyledNav1, Search, StyledNav2, UL, Lang,  StyledHeader } from "./style";
import Settings from "../Settings";
export const Header = () => {



  return (
    <StyledHeader>

      <StyledNav1>
        <img src={logo} alt="logo" />

        <Search>
          <input type="text" placeholder="Search" />
          <select>
            <option>All category</option>
          </select>
          <button type="submit">Search</button>
        </Search>
<Settings />
      </StyledNav1>

      <StyledNav2>
        <UL>
          <li>
            <img src={category} alt="category" />
            All category
          </li>
          <li>Hot offers</li>
          <li>Gift boxes</li>
          <li>Projects</li>
          <li>Menu item</li>
          <li>
            <select>
              <option>Help</option>
            </select>
          </li>
        </UL>

        <Lang>
          <select>
            <option>English, USD</option>
          </select>
          <select>
            <option>Ship to </option>
          </select>
          <img src={almany} alt="almany" />
        </Lang>
      </StyledNav2>
    </StyledHeader>
  );
};
