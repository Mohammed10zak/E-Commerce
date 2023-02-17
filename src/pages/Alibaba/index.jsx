import React from "react";

import { NavLink } from "react-router-dom";

import { Offers } from "../../sections/Offer/index";
import { Dealsandoffer } from "../../sections/Dealsandoffer/index";
import { Recommendeditem } from "../../sections/Recommendeditem/index";
import { Source } from "../../sections/Sources/index";
import { Service } from "../../sections/Service/index";
import { Supplier } from "../../sections/Supplier/index";
import { Subscribe } from "../../components/Subscribe/index";
import { Footer } from "../../components/Footer/index";
import { Request } from "../../sections/Request/index";
import { Header } from "./../../components/Header/index";
import { Product } from "../../sections/Product";

import bgmain from "../../Images/bgmain.svg";
import Avatar from "../../Images/Avatar.svg";

import {
  Mainul,
  BGCard,
  Loguser,
  Userdiv,
  LearnButton,
  Joinbutton,
  Trending,
  Userinfo,
  GoLogButton,
  Sales,
  Dailyoffers,
  Marketing,
  ProductContainer,
  Recommendeditems,
  AllServices,
  Services,
  Suppliers,
  AllSuppliers,
} from "./style";

import {
  itemUL,
  marketingData,
  offerData,
  recommendedItems,
  services,
  suppliers,
} from "../../mock/data";

function Alibaba() {
  return (
    <div>
      <Header />

      <BGCard>
        <Mainul>
          {itemUL.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </Mainul>
        <div>
          <img src={bgmain} alt="bgmain" />
          <Trending>Latest trending Electronic items</Trending>
          <LearnButton type="submit">Learn more</LearnButton>
        </div>
        <Loguser>
          <Userdiv>
            <Userinfo>
              <img src={Avatar} alt="avatar" />
              <p>
                Hi,user <p> lets get stated</p>
              </p>
            </Userinfo>
            <NavLink to="/signup">
              <Joinbutton type="submit">Join Now</Joinbutton>
            </NavLink>
            <NavLink to="/signin">
              <GoLogButton type="submit">Log in</GoLogButton>
            </NavLink>
          </Userdiv>

          <Sales pColor={true}>
            <p> Get US $10 off with a new supplier</p>
          </Sales>

          <Sales>
            <p> Send quotes with supplier preferences</p>
          </Sales>
        </Loguser>
      </BGCard>

      <Dailyoffers>
        <Dealsandoffer />
        {offerData.map((offer, index) => (
          <Offers
            key={index}
            img={offer.img}
            alt={offer.alt}
            title={offer.title}
            discount={offer.discount}
          />
        ))}
      </Dailyoffers>

      {marketingData.map((marketing, marketingIndex) => (
        <Marketing key={marketingIndex}>
          <Source
            key={marketingIndex}
            img={marketing.sourceImg}
            alt={marketing.sourceAlt}
            title={marketing.sourceTitle}
            btn={marketing.sourceBtn}
          />

          <div>
            {marketing.productContainers.map(
              (productContainer, productContainerIndex) => (
                <ProductContainer key={productContainerIndex}>
                  {productContainer.map((product, productIndex) => (
                    <Product
                      key={productIndex}
                      title={product.title}
                      price={product.price}
                      img={product.img}
                    />
                  ))}
                </ProductContainer>
              )
            )}
          </div>
        </Marketing>
      ))}

      <Request />
      <Recommendeditems>
        <h2>Recommended items</h2>
        <div>
          {recommendedItems.map((item, i) => (
            <Recommendeditem
              key={i}
              img={item.img}
              price={item.price}
              description={item.description}
            />
          ))}
        </div>
      </Recommendeditems>

      <Services>
        <h3>Our extra services</h3>
        <AllServices>
          {services.map((service, index) => (
            <Service
              key={index}
              Serimg={service.img}
              alt={service.alt}
              Sertitle={service.title}
              icon={service.icon}
            />
          ))}
        </AllServices>
      </Services>

      <Suppliers>
        <h3>Suppliers by region</h3>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {suppliers.map((supplierGroup, index) => (
            <AllSuppliers key={index}>
              {supplierGroup.map((supplier, index) => (
                <Supplier
                  key={index}
                  SupplierImg={supplier.SupplierImg}
                  Supplieralt={supplier.Supplieralt}
                  country={supplier.country}
                  site={supplier.site}
                />
              ))}
            </AllSuppliers>
          ))}
        </div>
      </Suppliers>
      <Subscribe />
      <Footer />
    </div>
  );
}

export default Alibaba;
