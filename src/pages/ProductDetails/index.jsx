import React, { useState } from "react";

import { Header } from "../../components/Header";
import { RelatedProducts } from "../../sections/RelatedProducts";
import { Discount } from "../../components/Discount/index";
import { Footer } from "../../components/Footer";
import { MayProduct } from "../../sections/MayProduct/index";

import clothing1 from "../../Images/clothing.png";

import trueIcon from "../../Images/true.png";
import msg from "../../Images/msg1.png";
import sold from "../../Images/sold.png";
import country from "../../Images/country.png";
import verify from "../../Images/verify.png";
import worldwide from "../../Images/worldwide.png";
import likee from "../../Images/likee.png";
import truee from "../../Images/truee.png";

import {
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
import { Rating } from "../../sections/StoreCard/style";
import {
  clothingData,
  mayProducts,
  ratingData,
  relatedProduct,
} from "../../mock/data";

function ProductDetails() {
  const [clothingSrc, setClothingSrc] = useState(clothing1);

  const handleClick = (e) => {
    setClothingSrc(e.target.src);
  };

  return (
    <ProdDetails>
      <Header />
      <Information>
        <Clothings>
          <Clothing>
            <img src={clothingSrc} alt="clothing" />
          </Clothing>
          <SmallClothing>
            {clothingData.map((clothing, index) => (
              <img
                key={index}
                src={clothing.src}
                alt={clothing.alt}
                onClick={handleClick}
              />
            ))}
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
            <Rating>
              {ratingData.map((rating, index) => (
                <img
                  key={index}
                  src={rating.src}
                  alt={rating.alt}
                  id={index === 1 ? "rating2" : null}
                />
              ))}
              <span>9.3</span>
            </Rating>
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

          <div>
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
          </div>
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
          {mayProducts.map((product, index) => (
            <MayProduct
              key={index}
              img={product.img}
              title={product.title}
              price={product.price}
            />
          ))}
        </PossipleProd>
      </Descriptions>
      <Related>
        <h4>Related products</h4>
        <AllRelated>
          {relatedProduct.map((product, index) => (
            <RelatedProducts
              key={index}
              img={product.img}
              title={product.title}
              price={product.price}
            />
          ))}
        </AllRelated>
      </Related>
      <Discount />
      <Footer />
    </ProdDetails>
  );
}

export default ProductDetails;
