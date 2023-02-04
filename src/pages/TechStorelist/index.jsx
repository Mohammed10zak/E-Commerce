import { Header } from "../../components/Header";
import Verify from "../../components/Verify";
import { StroeCard } from "../../sections/StroeCard";
import { SideBar } from "../../components/SideBar/index";
import { Footer } from "../../components/Footer";

import imgcard1 from "../../Images/imgstore1.png";
import imgcard2 from "../../Images/imgstore2.png";
import imgcard3 from "../../Images/imgstore3.png";
import imgcard4 from "../../Images/imgstore4.png";
import imgcard5 from "../../Images/imgstore5.png";

import { Mainstore, Store, StoreCards } from "./style";
import { Subscribe } from "../../components/Subscribe";
import { ShowPages } from "../../components/ShowPages";

function TechStoreList() {
  return (
    <Store>
      <Header />
      <Mainstore>
        <SideBar />
        <div>
          <Verify />
          <StoreCards>
            <StroeCard
              ImgCard={imgcard1}
              TitleCard="Canon Cmera EOS 2000, Black 10x zoom"
              PriceCard="$998.00"
              descriptionCard="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua"
            />

            <StroeCard
              ImgCard={imgcard2}
              TitleCard="GoPro HERO6 4K Action Camera - Black"
              PriceCard="$998.00"
              descriptionCard="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit "
            />
            <StroeCard
              ImgCard={imgcard3}
              TitleCard="Canon Cmera EOS 2000, Black 10x zoom"
              PriceCard="$998.00"
              descriptionCard="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua"
            />

            <StroeCard
              ImgCard={imgcard4}
              TitleCard="Canon Cmera EOS 2000, Black 10x zoom"
              PriceCard="$998.00"
              descriptionCard="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua"
            />

            <StroeCard
              ImgCard={imgcard5}
              TitleCard="Canon Cmera EOS 2000, Black 10x zoom"
              PriceCard="$998.00"
              descriptionCard="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua"
            />
          </StoreCards>
            <ShowPages />
        </div>
      </Mainstore>
      <Subscribe />
      <Footer />
    </Store>
  );
}

export default TechStoreList;
