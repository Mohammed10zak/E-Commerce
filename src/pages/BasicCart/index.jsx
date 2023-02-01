import React from "react";
import { Setting, Settings,  StyledImgLogo } from "../../components/style";
import {
  Addcoupon,
  AllCarts,
  AllCartsBtns,
  AllSavingProducts,
  AllTotal,
  ApplyBtn,
  Avg,
  BackBtn,
  CartPage,
  CheckoutBtn,
  Coupon,
  Discounts,
  Inquire,
  Inquireimg,
  Inquires,
  Paymethods,
  SavingProducts,
  SillCart,
  StyledNavCart,
  Subtotal,
  Tax,
  TaxandCoupon,
  Total,
} from "./style";
import { MyCart } from "../../sections/MyCart";
import { SaveforlaterProd } from "../../sections/SaveforlaterProd/SaveforlaterProd";
import logo from "../../Images/logo.svg";
import profile from "../../Images/profile.svg";
import msg from "../../Images/msg.svg";
import cart from "../../Images/cart.svg";
import heart from "../../Images/heart.svg";

import teshirt from "../../Images/tshirt.png";
import bagg from "../../Images/bagg.png";
import rasm from "../../Images/rasm.png";
import backbtn from "../../Images/back.png";
import pay1 from "../../Images/pay1.png";
import pay2 from "../../Images/pay2.png";
import pay3 from "../../Images/pay3.png";
import pay4 from "../../Images/pay4.png";
import pay5 from "../../Images/pay5.png";
import delivery from "../../Images/delivery.png";
import cussupport from "../../Images/cussupport.png";
import securepay from "../../Images/securepay.png";
import forlater from "../../Images/forlater.png";
import forlater2 from "../../Images/forlater2.png";
import forlater3 from "../../Images/forlater3.png";
import forlater4 from "../../Images/forlater4.png";
import { Footer } from "../../components/Footer";
import { Discount } from './../../components/Discount';
import ToggleButton from './../../components/ToggleButton';
import { SaveBtn } from "../../sections/MyCart/style";


function Cart() {
  return (
    <div>
       <StyledNavCart>
        <StyledImgLogo src={logo} />
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
          <ToggleButton />
        </Settings>
      </StyledNavCart>
    <CartPage>
     

      <SillCart>
        <AllCarts>
          <h3>My cart (3)</h3>
          <MyCart
            img={teshirt}
            title="T-shirts with multiple colors, for men and lady"
            desc="Size: medium, Color: blue,  Material: Plastic
        Seller: Artel Market"
            price="$78.99"
            quantity="9"
          />

          <MyCart
            img={bagg}
            title="T-shirts with multiple colors, for men and lady"
            desc="Size: medium, Color: blue,  Material: Plastic
        Seller: Best factory LLC"
            price="$39.00"
            quantity="3"
          />

          <MyCart
            img={rasm}
            title="T-shirts with multiple colors, for men and lady"
            desc="Size: medium, Color: blue,  Material: Plastic
        Seller: Artel Market"
            price="$170.50"
            quantity="1"
          />
          <AllCartsBtns>
            <BackBtn type="submit">
              <img src={backbtn} alt="back" />
              Back to shop
            </BackBtn>

            <SaveBtn type="submit">Remove all</SaveBtn>
          </AllCartsBtns>
        </AllCarts>
        <TaxandCoupon>
          <Coupon>
            <label htmlFor="coupon">Have a coupon?</label>
            <div>
              <Addcoupon type="text" id="coupon" placeholder="Add coupon" />
              <ApplyBtn type="submit">Apply</ApplyBtn>
            </div>
          </Coupon>

          <Total>
            <Avg>
              <Subtotal>
                Subtotal:<span>$1403.97</span>
              </Subtotal>
              <Discounts>
                Discount:<span>- $60.00</span>
              </Discounts>
              <Tax>
                Tax:<span>+ $14.00</span>
              </Tax>
            </Avg>

            <AllTotal>
              Total:<span>$1357.97</span>
            </AllTotal>

            <CheckoutBtn type="submit">Checkout</CheckoutBtn>
            <Paymethods>
              <img src={pay1} alt="pay" />
              <img src={pay2} alt="pay" />
              <img src={pay3} alt="pay" />
              <img src={pay4} alt="pay" />
              <img src={pay5} alt="pay" />
            </Paymethods>
          </Total>
        </TaxandCoupon>
      </SillCart>
      <Inquires>
        <Inquire>
          <Inquireimg>
            <img src={securepay} alt="sequre" />
          </Inquireimg>
          <div>
            <p>Secure payment</p>
            <span>Have you ever finally just </span>
          </div>
        </Inquire>
        <Inquire>
          <Inquireimg>
            <img src={cussupport} alt="sequre" />
          </Inquireimg>
          <div>
            <p>Customer support</p>
            <span>Have you ever finally just </span>
          </div>
        </Inquire>
        <Inquire>
          <Inquireimg>
            <img src={delivery} alt="sequre" />
          </Inquireimg>
          <div>
            <p>Free delivery</p>
            <span>Have you ever finally just </span>
          </div>
        </Inquire>
      </Inquires>

      <AllSavingProducts>
        <h4>Saved for later</h4>
        <SavingProducts>
        <SaveforlaterProd
          img={forlater}
          price="$99.50"
          title="GoPro HERO6 4K Action Camera - Black"
        />
             <SaveforlaterProd
          img={forlater2}
          price="$99.50"
          title="GoPro HERO6 4K Action Camera - Black"
        />
             <SaveforlaterProd
          img={forlater3}
          price="$99.50"
          title="GoPro HERO6 4K Action Camera - Black"
        />
             <SaveforlaterProd
          img={forlater4}
          price="$99.50"
          title="GoPro HERO6 4K Action Camera - Black"
        />
</SavingProducts>
      </AllSavingProducts>
    </CartPage>
      <Discount />
<Footer />
    </div>
  );
}

export default Cart;
