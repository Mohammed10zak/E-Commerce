import React from "react";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";
import Verify from "../../components/Verify";
import { Mainstore, Store } from "./../TechStorelist/style";

import imgcard1 from "../../Images/imgstore1.png";
import imgcard2 from "../../Images/imgstore2.png";
import imgcard3 from "../../Images/imgstore3.png";
import imgcard4 from "../../Images/imgstore4.png";
import imgcard5 from "../../Images/imgstore5.png";
import imgcard6 from "../../Images/imgcard6.png";
import imgcard7 from "../../Images/imgcard7.png";
import x from "../../Images/x.png";

import { ElectronicCard } from "./../../sections/ElectronicCard";
import { Subscribe } from "../../components/Subscribe";
import { Footer } from "../../components/Footer";
import { AllKinds, ElectronicCards, Fillters } from "./style";
import { StyledLink } from "./../Signup/style";

function Electronic() {
  return (
    <Store>
      <Header />
      <Mainstore>
        <SideBar />
        <div>
          <Verify />

          <AllKinds>
            <Fillters>
              <span>Samsung</span>
              <img src={x} alt={"x"} />
            </Fillters>
            <Fillters>
              <span>Apple</span>
              <img src={x} alt={"x"} />
            </Fillters>
            <Fillters>
              <span>Poco</span>
              <img src={x} alt={"x"} />
            </Fillters>
            <Fillters>
              <span>Metallic</span>
              <img src={x} alt={"x"} />
            </Fillters>
            <Fillters>
              <span>4 star</span>
              <img src={x} alt={"x"} />
            </Fillters>
            <Fillters>
              <span>3 star</span>
              <img src={x} alt={"x"} />
            </Fillters>
            <StyledLink>Clear all filter</StyledLink>
          </AllKinds>
          <ElectronicCards>
            <div>
              <ElectronicCard
                ImgCard={imgcard1}
                ElectronicPriceCard="$998.00"
                ElectronicTitleCard="GoPro HERO6 4K Action Camera - Black"
              />

              <ElectronicCard
                ImgCard={imgcard2}
                ElectronicPriceCard="$998.00"
                ElectronicTitleCard="GoPro HERO6 4K Action Camera - Black"
              />
              <ElectronicCard
                ImgCard={imgcard3}
                ElectronicPriceCard="$998.00"
                ElectronicTitleCard="GoPro HERO6 4K Action Camera - Black"
              />
            </div>
            <div>
              <ElectronicCard
                ImgCard={imgcard4}
                ElectronicPriceCard="$998.00"
                ElectronicTitleCard="GoPro HERO6 4K Action Camera - Black"
              />
              <ElectronicCard
                ImgCard={imgcard5}
                ElectronicPriceCard="$998.00"
                ElectronicTitleCard="GoPro HERO6 4K Action Camera - Black"
              />
              <ElectronicCard
                ImgCard={imgcard1}
                ElectronicPriceCard="$998.00"
                ElectronicTitleCard="GoPro HERO6 4K Action Camera - Black"
              />
            </div>
            <div>
              <ElectronicCard
                ImgCard={imgcard2}
                ElectronicPriceCard="$998.00"
                ElectronicTitleCard="Canon Cmera EOS 2000, Black 10x zoom"
              />
              <ElectronicCard
                ImgCard={imgcard6}
                ElectronicPriceCard="$998.00"
                ElectronicTitleCard="Canon Cmera EOS 2000, Black 10x zoom"
              />
              <ElectronicCard
                ImgCard={imgcard7}
                ElectronicPriceCard="$998.00"
                ElectronicTitleCard="Canon Cmera EOS 2000, Black 10x zoom"
              />
            </div>
          </ElectronicCards>
        </div>
      </Mainstore>
      <Subscribe />
      <Footer />
    </Store>
  );
}

export default Electronic;
