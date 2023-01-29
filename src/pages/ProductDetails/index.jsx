import React from "react";
import { Header } from "./../../components/Header";

import clothing from "../../Images/clothing.png";
import clothing1 from "../../Images/clothing1.png";
import clothing2 from "../../Images/clothing2.png";
import clothing3 from "../../Images/clothing3.png";
import clothing4 from "../../Images/clothing4.png";
import clothing5 from "../../Images/clothing5.png";
import clothing6 from "../../Images/clothing6.png";
import trueIcon from "../../Images/true.png";
import msg from "../../Images/msg1.png";
import sold from "../../Images/sold.png";
import country from "../../Images/country.png";
import verify from "../../Images/verify.png";
import worldwide from "../../Images/worldwide.png";
import likee from "../../Images/likee.png";
import truee from "../../Images/truee.png";
import jacket1 from "../../Images/jacket1.png";
import jacket2 from "../../Images/jacket2.png";
import jacket3 from "../../Images/jacket3.png";
import jacket4 from "../../Images/jacket4.png";
import jacket5 from "../../Images/jacket5.png";
import related1 from "../../Images/related1.png";
import related2 from "../../Images/related2.png";
import related3 from "../../Images/related3.png";
import related4 from "../../Images/related4.png";
import related5 from "../../Images/related5.png";
import related6 from "../../Images/related6.png";

import {
  Aboutprod,
  Additional,
  AdditionalFeatures,
  AllRelated,
  Clothing,
  Clothings,
  ClothisTitle,
  Content,
  Description,
  DescriptionProd,
  Descriptions,
  Info,
  Information,
  LargePeace,
  MideamPeace,
  MoreInfo,
  Nav,
  PDesc,
  Peaces,
  PossipleProd,
  PProps,
  Preferances,
  Price,
  ProdDetails,
  ProductProps,
  Props,
  PTitle,
  Related,
  Save,
  SentButton,
  SillerButton,
  SmallClothing,
  SmallPeace,
  Statistic,
  Stock,
  StyleLink,
  Supplier,
  SupplierInfo,
  SupplierProfile,
} from "./style";
import {  Rating } from "../../sections/style";
import { MayProduct } from "../../sections/MayProduct";
import { RelatedProducts } from "../../sections/RelatedProducts";
import { Discount } from "../../components/Discount";
import { Footer } from "../../components/Footer";
function ProductDetails() {
  return (
    <ProdDetails>
      <Header />
      <Information>
        <Clothings>
          <Clothing>
            <img src={clothing} alt="clothing" />
          </Clothing>
          <SmallClothing>
            <img src={clothing1} alt="clothing" />
            <img src={clothing2} alt="clothing" />
            <img src={clothing3} alt="clothing" />
            <img src={clothing4} alt="clothing" />
            <img src={clothing5} alt="clothing" />
            <img src={clothing6} alt="clothing" />
          </SmallClothing>
        </Clothings>

        <Description>
          <Stock>
            <img src={trueIcon} alt="true icon" /> In stock
          </Stock>

          <ClothisTitle>
            Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
          </ClothisTitle>
          <Statistic>
            <Rating>Rating: 9.3</Rating>
            <span>
              <img src={msg} alt="msg" />
              32 reviews
            </span>

            <span className="msg">
              <img src={sold} alt="msg" />
              154 sold
            </span>
          </Statistic>

          <Peaces>
            <SmallPeace>
              <p>$98.00</p>
              <span>50-100 pcs</span>
            </SmallPeace>
            <MideamPeace>
              <p>$90.00</p>
              <span>100-700 pcs</span>
            </MideamPeace>
            <LargePeace>
              <p>$78.00</p>
              <span>700+ pcs</span>
            </LargePeace>
          </Peaces>

          <Aboutprod>
            <Price>
              <PTitle>Price: </PTitle>
              <PDesc>Negotiable</PDesc>
            </Price>

            <MoreInfo>
              <Info>
                <PTitle>Type:</PTitle>
                <PDesc>Classic shoes</PDesc>
              </Info>

              <Info>
                <PTitle>Material:</PTitle>
                <PDesc>Plastic material</PDesc>
              </Info>
              <Info>
                <PTitle>Design:</PTitle>
                <PDesc>Modern nice</PDesc>
              </Info>
            </MoreInfo>

            <MoreInfo>
              <Info>
                <PTitle>Customization: </PTitle>
                <PDesc>Customized logo and design custom packages</PDesc>
              </Info>

              <Info>
                <PTitle>Protection: </PTitle>
                <PDesc>Refund Policy</PDesc>
              </Info>
              <Info>
                <PTitle>Warranty: </PTitle>
                <PDesc>2 years full warranty </PDesc>
              </Info>
            </MoreInfo>
          </Aboutprod>
        </Description>
        <div>
          <SupplierProfile>
            <Supplier>
              <div>R</div>
              <p>Supplier Guanjoi Trading LLC</p>
            </Supplier>
            <SupplierInfo>
              <div>
                <img src={country} alt="country" /> <span>Germany, Berlin</span>
              </div>
              <div>
                <img src={verify} alt="country" /> <span>Verified Seller</span>
              </div>
              <div>
                <img src={worldwide} alt="country" />{" "}
                <span>Worldwide shipping</span>
              </div>
            </SupplierInfo>

            <SentButton type="submit">Send inquiry</SentButton>
            <SillerButton>Seller’s profile</SillerButton>
          </SupplierProfile>
          <Save>
            <img src={likee} alt="like" />
            <span>Save for later</span>
          </Save>
        </div>
      </Information>

      <Descriptions>
        <DescriptionProd>
          <Nav>
            <StyleLink>Description</StyleLink>
            <StyleLink>Reviews</StyleLink>
            <StyleLink>Shipping</StyleLink>
            <StyleLink>About company</StyleLink>
          </Nav>

          <Content>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, Quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Content>

          <Preferances>
            <ProductProps>
              <PProps>Model</PProps>
              <Props>#8786867</Props>
            </ProductProps>

            <ProductProps>
              <PProps>Style</PProps>
              <Props>Classic style </Props>
            </ProductProps>
            <ProductProps>
              <PProps>Certificate</PProps>
              <Props>ISO-898921212</Props>
            </ProductProps>
            <ProductProps>
              <PProps>Size</PProps>
              <Props>34mm x 450mm x 19mm</Props>
            </ProductProps>
            <ProductProps>
              <PProps>Memory</PProps>
              <Props>36GB RAM</Props>
            </ProductProps>
          </Preferances>

          <AdditionalFeatures>
            <Additional>
              <img src={truee} alt="true" />
              <span>Some great feature name here</span>
            </Additional>
            <Additional>
              <img src={truee} alt="true" />
              <span>Lorem ipsum dolor sit amet, consectetur </span>
            </Additional>
            <Additional>
              <img src={truee} alt="true" />
              <span>Duis aute irure dolor in reprehenderit</span>
            </Additional>
            <Additional>
              <img src={truee} alt="true" />
              <span>Some great feature name here</span>
            </Additional>
          </AdditionalFeatures>
        </DescriptionProd>

        <PossipleProd>
          <h4>You may like</h4>
          <MayProduct
            img={jacket1}
            title="Apple Watch Series Space Gray"
            price="$7.00 - $99.50"
          />
          <MayProduct
            img={jacket2}
            title="Apple Watch Series Space Gray"
            price="$7.00 - $99.50"
          />
          <MayProduct
            img={jacket3}
            title="Apple Watch Series Space Gray"
            price="$7.00 - $99.50"
          />
          <MayProduct
            img={jacket4}
            title="Apple Watch Series Space Gray"
            price="$7.00 - $99.50"
          />
          <MayProduct
            img={jacket5}
            title="Apple Watch Series Space Gray"
            price="$7.00 - $99.50"
          />
        </PossipleProd>
      </Descriptions>
      <Related>
        <h4>Related products</h4>
        <AllRelated>
          <RelatedProducts
            img={related1}
            title="Xiaomi Redmi 8 Original "
            price="$32.00-$40.00"
          />
          <RelatedProducts
            img={related2}
            title="Xiaomi Redmi 8 Original "
            price="$32.00-$40.00"
          />
          <RelatedProducts
            img={related3}
            title="Xiaomi Redmi 8 Original "
            price="$32.00-$40.00"
          />
          <RelatedProducts
            img={related4}
            title="Xiaomi Redmi 8 Original "
            price="$32.00-$40.00"
          />
          <RelatedProducts
            img={related5}
            title="Xiaomi Redmi 8 Original "
            price="$32.00-$40.00"
          />
          <RelatedProducts
            img={related6}
            title="Xiaomi Redmi 8 Original "
            price="$32.00-$40.00"
          />
        </AllRelated>
      </Related>
      <Discount />
      <Footer />
    </ProdDetails>
  );
}

export default ProductDetails;
