import React from "react";

import logo from "../../Images/logo.svg";
import profile from "../../Images/profile.svg";
import msg from "../../Images/msg.svg";
import cart from "../../Images/cart.svg";
import heart from "../../Images/heart.svg";
import category from "../../Images/category.svg";
import almany from "../../Images/almany.svg";
import { Setting, Settings } from "./../style";
import { StyledNav1, Search, StyledNav2, UL, Lang } from "./style";
import ToggleButton from "../ToggleButton";
import { NavLink } from "react-router-dom";
export const Header = () => {
  return (
    <header>
      <StyledNav1>
        <img src={logo} alt="logo" />

        <Search>
          <input type="text" placeholder="Search" />
          <select>
            <option>All category</option>
          </select>
          <button type="submit">Search</button>
        </Search>
        <Settings>
          <Setting>
            <img src={profile} alt={"profile"} />
            <p>Profile</p>
          </Setting>
          <Setting>
            <img src={msg} alt={"msg"} />
            <p>Message</p>
          </Setting>
          <Setting>
            <img src={heart} alt={"heart"} />
            <p>Orders</p>
          </Setting>
          <Setting>
            <NavLink to="/cartpage">
              <img src={cart} alt={"cart"} />
            </NavLink>
            <p>My cart</p>
          </Setting>
          <Setting>
            <ToggleButton />
          </Setting>
        </Settings>
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
    </header>
  );
};
