import React from "react";

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
import monitorIcon from "../../Images/monitorIcon.svg";
import sentIcon from "../../Images/sentIcon.svg";
import prodIcon from "../../Images/prodIcon.svg";
import searchIcon from "../../Images/searchIcon.svg";

import watch from "../../Images/watch.png";
import camera from "../../Images/camera.png";
import laptop from "../../Images/laptop.png";
import canon from "../../Images/canon.png";
import headphone from "../../Images/headphone.png";
import home from "../../Images/home1.png";
import chair from "../../Images/chair.png";
import chair1 from "../../Images/chair1.png";
import chair2 from "../../Images/chair2.png";
import gra from "../../Images/gra.png";
import blinder from "../../Images/blinder.png";
import mixer from "../../Images/mixer.png";
import appliance from "../../Images/appliance.png";
import tree from "../../Images/tree.png";
import source from "../../Images/source.png";
import whiteheadphone from "../../Images/whiteheadphone.png";
import boiler from "../../Images/boiler.png";
import Smartphones from "../../Images/Smartphones.png";
import electrecKatra from "../../Images/electricKatra.png";
import teshiert from "../../Images/teshirt.png";
import sweetir from "../../Images/sweetir.png";
import jzdan from "../../Images/jzdan.png";
import jeansshort from "../../Images/jeansshort.png";
import jacket from "../../Images/jacket.png";
import bag from "../../Images/bag.png";
import fly from "../../Images/fly.png";
import industry from "../../Images/industry.png";
import product from "../../Images/product.png";
import product2 from "../../Images/product2.png";
import ae from "../../Images/ae.png";
import aus from "../../Images/aus.png";
import us from "../../Images/us.png";
import ru from "../../Images/ru.png";
import it from "../../Images/it.png";
import dk from "../../Images/dk.png";
import cn from "../../Images/cn.png";
import fr from "../../Images/fr.png";
import gb from "../../Images/gb.png";

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
  ItemContainer,
  AllServices,
  Services,
  Suppliers,
  AllSuppliers,
} from "./style";
import { NavLink } from "react-router-dom";

function Alibaba() {
  const itemUL = [
    { id: 1, name: "Automobiles" },
    { id: 2, name: "Clothes and wear" },
    { id: 3, name: "Home interiors" },
    { id: 4, name: "Computer and tech" },
    { id: 5, name: "Tools, equipments" },
    { id: 6, name: "Sports and outdoor" },
    { id: 7, name: "Animal and pets" },
    { id: 8, name: "Machinery tools" },
    { id: 9, name: "More category" },
  ];

  const offerData = [
    {
      img: watch,
      alt: "watch",
      title: "Smart watches",
      discount: "-25%",
    },
    {
      img: laptop,
      alt: "laptop",
      title: "Laptops",
      discount: "-15%",
    },
    {
      img: camera,
      alt: "camera",
      title: "GoPro cameras",
      discount: "-40%",
    },
    {
      img: headphone,
      alt: "headphone",
      title: "Headphones",
      discount: "-25%",
    },
    {
      img: canon,
      alt: "canon",
      title: "Canon cameras",
      discount: "-25%",
    },
  ];

  const marketingData = [
    {
      sourceImg: home,
      sourceAlt: "home",
      sourceTitle: "Home and outdoor",
      sourceBtn: "Source now",
      productContainers: [
        [
          { title: "Soft chairs", price: "From USD 19", img: chair },
          { title: "Sofa & chair", price: "From USD 19", img: chair1 },
          { title: "Kitchen dishes", price: "From USD 19", img: chair2 },
          { title: "Smart watches", price: "From USD 19", img: gra },
        ],
        [
          { title: "Kitchen mixer", price: "From USD 100", img: mixer },
          { title: "Blenders", price: "From USD 39", img: blinder },
          { title: "Home appliance", price: "From USD 19", img: appliance },
          { title: "Coffee maker", price: "From USD 10", img: tree },
        ],
      ],
    },
    {
      sourceImg: source,
      sourceAlt: "source",
      sourceTitle: "Consumer electronics and gadgets",
      sourceBtn: "Source now",
      productContainers: [
        [
          { title: "Smart watches", price: "From USD 19", img: watch },
          { title: "Cameras", price: "From USD 89", img: camera },
          { title: "Headphones", price: "From USD 10", img: whiteheadphone },
          { title: "Smart watches", price: "From USD 90", img: boiler },
        ],
        [
          { title: "Gaming set", price: "From USD 35", img: headphone },
          { title: "Laptops & PC", price: "From USD 340", img: laptop },
          { title: "Smartphones", price: "From USD 19", img: Smartphones },
          {
            title: "Electric kattle",
            price: "From USD 240",
            img: electrecKatra,
          },
        ],
      ],
    },
  ];

  const services = [
    {
      img: industry,
      alt: "industry",
      title: "Source from Industry Hubs",
      icon: searchIcon,
    },
    {
      img: product,
      alt: "product",
      title: "Customize Your Products",
      icon: prodIcon,
    },
    {
      img: fly,
      alt: "industry",
      title: "Fast, reliable shipping by ocean or air",
      icon: sentIcon,
    },
    {
      img: product2,
      alt: "product2",
      title: "Product monitoring and inspection",
      icon: monitorIcon,
    },
  ];

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
          <ItemContainer>
            <Recommendeditem
              img={teshiert}
              price="$10.30"
              description="T-shirts with multiple colors, for men"
            />
            <Recommendeditem
              img={sweetir}
              price="$10.30"
              description="Jeans shorts for men blue color"
            />{" "}
            <Recommendeditem
              img={jacket}
              price="$12.50"
              description="Brown winter coat medium size"
            />{" "}
            <Recommendeditem
              img={jzdan}
              price="$34.00"
              description="Jeans bag for travel for men"
            />
            <Recommendeditem
              img={bag}
              price="$99.00"
              description="Leather wallet"
            />
          </ItemContainer>

          <ItemContainer>
            <Recommendeditem
              img={jeansshort}
              price="$9.99"
              description="Canon camera black, 100x zoom"
            />
            <Recommendeditem
              img={whiteheadphone}
              price="$8.99"
              description="Headset for gaming with mic  "
            />{" "}
            <Recommendeditem
              img={bag}
              price="$10.30"
              description="Smartwatch silver color modern"
            />{" "}
            <Recommendeditem
              img={gra}
              price="$34.00"
              description="Jeans bag for travel for men"
            />
            <Recommendeditem
              img={boiler}
              price="$99.00"
              description="Jeans bag for travel for men"
            />
          </ItemContainer>
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
        <div>
          <AllSuppliers>
            <Supplier
              SupplierImg={ae}
              Supplieralt="ae"
              country="Arabic Emirates"
              site="shopname.ae"
            />
            <Supplier
              SupplierImg={aus}
              Supplieralt="ae"
              country="Australia"
              site="shopname.ae"
            />
            <Supplier
              SupplierImg={us}
              Supplieralt="ae"
              country="United States"
              site="shopname.ae"
            />
            <Supplier
              SupplierImg={ru}
              Supplieralt="ae"
              country="Russia"
              site="shopname.ae"
            />
            <Supplier
              SupplierImg={it}
              Supplieralt="ae"
              country="Italy"
              site="shopname.ae"
            />
          </AllSuppliers>

          <AllSuppliers>
            <Supplier
              SupplierImg={dk}
              Supplieralt="ae"
              country="Denmark"
              site="shopname.ae"
            />
            <Supplier
              SupplierImg={fr}
              Supplieralt="ae"
              country="France"
              site="shopname.ae"
            />
            <Supplier
              SupplierImg={ae}
              Supplieralt="ae"
              country="Arabic Emirates"
              site="shopname.ae"
            />
            <Supplier
              SupplierImg={cn}
              Supplieralt="ae"
              country="China"
              site="shopname.ae"
            />
            <Supplier
              SupplierImg={gb}
              Supplieralt="ae"
              country="Great Britain"
              site="shopname.ae"
            />
          </AllSuppliers>
        </div>
      </Suppliers>
      <Subscribe />
      <Footer />
    </div>
  );
}

export default Alibaba;
