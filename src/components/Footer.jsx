import React from "react";

import logo from "./../Images/logo.svg";

import youtube from "./../Images/youtube.png";
import insta from "./../Images/insta.png";
import linkedin from "./../Images/linkedin.png";
import face from "./../Images/face.png";
import tweet from "./../Images/tweet.png";
import apple from "./../Images/apple.png";
import goplay from "./../Images/goplay.png";
import us from "./../Images/us.png";

import { Foot1, Foot2, Icon, Icons } from "./style";

export const Footer = () => {
  return (
    <footer>
      <Foot1>
        <div>
          <img src={logo} alt="logo" />
          <p>
            Best information about the company gies here but now lorem ipsum is
          </p>
          <Icons>
            <Icon src={face} alt="face20" />
            <Icon src={tweet} alt="tweet" />
            <Icon src={linkedin} alt="linkedin" />
            <Icon src={insta} alt="insta" />
            <Icon src={youtube} alt="youtube" />
          </Icons>
        </div>

        <div>
          <ul>
            About
            <li>About Us</li>
            <li>Find store</li>
            <li>Categories</li>
            <li>Blogs</li>
          </ul>
        </div>

        <div>
          <ul>
            Partnership
            <li>About Us</li>
            <li>Find store</li>
            <li>Categories</li>
            <li>Blogs</li>
          </ul>
        </div>

        <div>
          <ul>
            Information
            <li>Help Center</li>
            <li>Money Refund</li>
            <li>Shipping</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div>
          <ul>
            For users
            <li>Login</li>
            <li>Register</li>
            <li>Settings</li>
            <li>My Orders</li>
          </ul>
        </div>
        <div>
          <ul>
            Get app
            <div>
              <img src={apple} alt="apple" />
            </div>
            <div>
              <img src={goplay} alt="goplay" />
            </div>
          </ul>
        </div>
      </Foot1>
      <Foot2>
        <p>© 2023 Ecommerce. </p>
        <div>
        <img src={us} alt="english" />
        <select>
          <option>English</option>
        </select>
        </div>
      </Foot2>
      </footer>
  );
};
