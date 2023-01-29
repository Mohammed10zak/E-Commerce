import React from 'react'
import { StyledNav,StyledNav1,StyledImgLogo,Search,Settings, Setting,StyledNav2,UL,Lang,} from './style';


import logo from "./../Images/logo.svg";
import profile from "./../Images/profile.svg";
import msg from "./../Images/msg.svg";
import cart from "./../Images/cart.svg";
import heart from "./../Images/heart.svg";
import category from "./../Images/category.svg";
import almany from "./../Images/almany.svg";
export const Header = () => {
  return (
    <StyledNav>
    <StyledNav1>
      <StyledImgLogo src={logo} />
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
          <img src={cart} alt={"cart"} />
          <p>My cart</p>
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
          <img src={almany} alt="almany" />
          <option>Ship to </option>
        </select>
      </Lang>
    </StyledNav2>
  </StyledNav>
  )
}

