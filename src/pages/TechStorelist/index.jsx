import React from "react";

//components
import { Header } from "../../components/Header";
import Verify from "../../components/Verify/index";
import { SideBar } from "../../components/SideBar/index";
import { StoreCard } from "../../sections/StoreCard";
import { Subscribe } from "../../components/Subscribe";
import { ShowPages } from "../../components/ShowPages";
import { Footer } from "../../components/Footer";

//styled component
import { Mainstore, Store, StoreCards } from "./style";

//mock data
import { electronicCardsData } from "../../mock/data";

function TechStoreList() {
  
  return (
    <Store>
      <Header />
      <Mainstore>
        <SideBar />
        <div>
          <Verify />
          <StoreCards>
            {electronicCardsData.map((product) => (
              <StoreCard key={product.id} {...{ product }} />
            ))}
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
