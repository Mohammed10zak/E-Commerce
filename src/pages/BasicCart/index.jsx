import React from "react";

import { NavLink } from "react-router-dom";

//components
import { Footer } from "../../components/Footer";
import { Discount } from "./../../components/Discount";
import { SaveBtn } from "../../sections/MyCart/style";
import Settings from "./../../components/Settings/index";
import { StyledImgLogo } from "../../components/style";
import { SaveforlaterProd } from "../../sections/SaveforlaterProd";
import { MyCart } from "../../sections/MyCart";

//styled components
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

//images
import logo from "../../Images/logo.svg";
import backbtn from "../../Images/back.png";
import delivery from "../../Images/delivery.png";
import cussupport from "../../Images/cussupport.png";
import securepay from "../../Images/securepay.png";

//mock data
import { paymentMethods, saveForLaterData } from "../../mock/data";

//context
import { useProductContext } from "./../../context/productContext";

function Cart() {
  const PaymentMethod = ({ src, alt }) => <img src={src} alt={alt} />;

  const { state, removeFromCart, removeAllCarts } = useProductContext();

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  const handleClearCart = () => {
    removeAllCarts();
  };

  return (
    <div>
      <StyledNavCart>
        <StyledImgLogo src={logo} />
        <Settings />
      </StyledNavCart>
      <CartPage>
        <SillCart>
          <AllCarts>
            <h3>My Cart ({state.count})</h3>
            {!state.electronicCardsData.length && (
              <h3>No Products in the cart</h3>
            )}

            {state?.electronicCardsData?.map((product) => (
              <MyCart
                key={product.id}
                {...{ product }}
                onRemove={handleRemove}
              />
            ))}

            <AllCartsBtns>
              <NavLink to="/electronic">
                {" "}
                <BackBtn type="button">
                  <img src={backbtn} alt="back" />
                  Back to shop
                </BackBtn>
              </NavLink>
              <SaveBtn onClick={handleClearCart}>Remove all</SaveBtn>
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
                  Subtotal:<span>140.00$</span>
                </Subtotal>
                <Discounts>
                  Discount:<span>-60.00$</span>
                </Discounts>
                <Tax>
                  Tax:<span>+1.03$</span>
                </Tax>
              </Avg>

              <AllTotal>
                Total:<span>71$</span>
              </AllTotal>

              <CheckoutBtn type="submit">Checkout</CheckoutBtn>
              <Paymethods>
                {paymentMethods.map((paymentMethod) => (
                  <PaymentMethod
                    key={paymentMethod.id}
                    src={paymentMethod.src}
                    alt={paymentMethod.alt}
                  />
                ))}
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
            {saveForLaterData?.map((product) => (
              <SaveforlaterProd
                key={product.id}
                img={product.img}
                price={product.price}
                title={product.title}
              />
            ))}
          </SavingProducts>
        </AllSavingProducts>
      </CartPage>
      <Discount />
      <Footer />
    </div>
  );
}

export default Cart;
