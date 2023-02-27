import React from "react";
import { AllSettings, Setting } from "./style";
import { NavLink } from "react-router-dom";
import ToggleButton from "./../ToggleButton/index";

import profile from "../../Images/profile.svg";
import msg from "../../Images/msg.svg";
import cart from "../../Images/cart.svg";
import heart from "../../Images/heart.svg";
import LogOut from './../LogOut/index';

const Settings = () => {
  return (
    <div>
      <AllSettings>
        <Setting>
          <img src={profile} alt={"profile"} />
          <p>Profile</p>
        </Setting>
        <Setting>
          <NavLink to="/productdetails">
            <img src={msg} alt={"msg"} />
          </NavLink>
          <p>Message</p>
        </Setting>
        <Setting>
          <NavLink to="/electronic">
            <img src={heart} alt={"heart"} />
          </NavLink>
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
          <p>theme</p>
        </Setting>
        <Setting>
          <LogOut />
        </Setting>
      </AllSettings>
    </div>
  );
};

export default Settings;
