import React from "react";

import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar/index";
import Verify from "../../components/Verify/index";
import { ElectronicCard } from "../../sections/ElectronicCard";
import { Subscribe } from "../../components/Subscribe";
import { Footer } from "../../components/Footer";

import { AllKinds, ElectronicCards, Fillters } from "./style";
import { StyledLink } from "../Signin/style";
import { Mainstore, Store } from "./../TechStorelist/style";

import { electronicCardsData, filters } from "../../mock/data";
import { ShowPages } from "../../components/ShowPages";

function Electronic() {
  return (
    <Store>
      <Header />
      <Mainstore>
        <SideBar />
        <div>
          <Verify />

          <AllKinds>
            {filters.map((filter) => (
              <Fillters key={filter.name}>
                <span>{filter.name}</span>
                <img src={filter.image} alt={filter.alt} />
              </Fillters>
            ))}
            <StyledLink>Clear all filter</StyledLink>
          </AllKinds>

          <ElectronicCards>
            {electronicCardsData.map((product) => (
              <ElectronicCard key={product.id} {...{ product }} />
            ))}
          </ElectronicCards>
          <ShowPages />
        </div>
      </Mainstore>
      <Subscribe />
      <Footer />
    </Store>
  );
}

export default Electronic;
