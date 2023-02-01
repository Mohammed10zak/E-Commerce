import React from 'react'
import { Paymethods } from '../../pages/BasicCart/style'
import pay1 from "../../Images/pay1.png";
import pay2 from "../../Images/pay2.png";
import pay3 from "../../Images/pay3.png";
import pay4 from "../../Images/pay4.png";
import { Footerform } from './style';
export const FormFooter = () => {
  return (
    <Footerform>
         <Paymethods>
              <img src={pay1} alt="pay" />
              <img src={pay2} alt="pay" />
              <img src={pay3} alt="pay" />
              <img src={pay4} alt="pay" />
            </Paymethods>
<ul>
    <li>Support</li>
    <li>Privacy & Cookies</li>
    <li>Accessibility</li>
</ul>
    </Footerform>
  )
}

