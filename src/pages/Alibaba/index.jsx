import React from "react";

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
  Main,
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
import { Offers } from "../../sections/Offer/index";
import { Dealsandoffer } from "../../sections/Dealsandoffer/index";
import { Source } from "../../sections/Sources/Source";
import { Product } from "../../sections/Product";
import { Recommendeditem } from "../../sections/Recommendeditem/index";
import { Service } from "../../sections/Service/index";
import { Supplier } from "../../sections/Supplier/index";
import { Subscribe } from "../../components/Subscribe/index";
import { Footer } from "../../components/Footer/index";
import { Request } from "../../sections/Request/index";
import ToggleButton from "../../components/ToggleButton";
import { Header } from "./../../components/Header/index";

function Alibaba() {
  return (
    <div>
      <Header />

      <BGCard>
        <Mainul>
          <li>Automobiles</li>
          <li>Clothes and wear</li>
          <li>Home interiors</li>
          <li>Computer and tech</li>
          <li>Tools, equipments</li>
          <li>Sports and outdoor</li>
          <li>Animal and pets</li>
          <li>Machinery tools</li>
          <li>More category</li>
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

            <Joinbutton type="submit">Join Now</Joinbutton>
            <GoLogButton type="submit">Log in</GoLogButton>
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
        <Dealsandoffer></Dealsandoffer>
        <Offers img={watch} alt="watch" title="Smart watches" discount="-25%" />
        <Offers img={laptop} alt="laptop" title="Laptops" discount="-15%" />
        <Offers
          img={camera}
          alt="camera"
          title="GoPro cameras"
          discount="-40%"
        />
        <Offers
          img={headphone}
          alt="headphone"
          title="Headphones"
          discount="-25%"
        />
        <Offers
          img={canon}
          alt="canon"
          title="Canon camreras"
          discount="-25%"
        />
      </Dailyoffers>

      <Marketing>
        <Source
          img={home}
          alt="home"
          title="Home and outdoor"
          btn="Source now"
        />
        <div>
          <ProductContainer>
            <Product title="Soft chairs" price="From USD 19" img={chair} />
            <Product title="Sofa & chair" price="From USD 19" img={chair1} />
            <Product title="Kitchen dishes" price="From USD 19" img={chair2} />
            <Product title="Smart watches" price="From USD 19" img={gra} />
          </ProductContainer>
          <ProductContainer>
            <Product title="Kitchen mixer" price="From USD 100" img={mixer} />
            <Product title="Blenders" price="From USD 39" img={blinder} />
            <Product
              title="Home appliance"
              price="From USD 19"
              img={appliance}
            />
            <Product title="Coffee maker" price="From USD 10" img={tree} />
          </ProductContainer>
        </div>
      </Marketing>

      <Marketing>
        <Source
          img={source}
          alt="source"
          title="Consumer electronics and gadgets"
          btn="Source now"
        />

        <div>
          <ProductContainer>
            <Product title="Smart watches" price="From USD 19" img={watch} />
            <Product title="Cameras" price="From USD 89" img={camera} />
            <Product
              title="Headphones"
              price="From USD 10"
              img={whiteheadphone}
            />
            <Product title="Smart watches" price="From USD 90" img={boiler} />
          </ProductContainer>
          <ProductContainer>
            <Product title="Gaming set" price="From USD 35" img={headphone} />
            <Product title="Laptops & PC" price="From USD 340" img={laptop} />
            <Product
              title="Smartphones"
              price="From USD 19"
              img={Smartphones}
            />
            <Product
              title="Electric kattle"
              price="From USD 240"
              img={electrecKatra}
            />
          </ProductContainer>
        </div>
      </Marketing>
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
          <Service
            Serimg={industry}
            alt="industry"
            Sertitle="Source from Industry Hubs"
            icon={searchIcon}
          />
          <Service
            Serimg={product}
            alt="product"
            Sertitle="Customize Your Products"
            icon={prodIcon}
          />
          <Service
            Serimg={fly}
            alt="industry"
            Sertitle="Fast, reliable shipping by ocean or air"
            icon={sentIcon}
          />
          <Service
            Serimg={product2}
            alt="product2"
            Sertitle="Product monitoring and inspection"
            icon={monitorIcon}
          />
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
