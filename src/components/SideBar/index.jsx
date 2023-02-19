import React from "react";
import { useState } from "react";

import {
  Sidebar,
  Accordion,
  Brands,
  Features,
  Pricerange,
  Labels,
  Ratings,
  Condition,
  Inputs,
  StyledAccordionContent,
  StyledAccordionTitle,
} from "./style";

import fillstar from "../../Images/fillstar.png";
import star from "../../Images/star.png";

export const SideBar = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const sections = [
    {
      title: "Category",
      content: <p>Mobile accessory</p>,
    },
    {
      title: "Mobile accessory",
      content: <p>Mobile accessory</p>,
    },
    {
      title: "Electronics",
      content: <p>Electronics</p>,
    },
    {
      title: "Smartphones ",
      content: <p>Smartphones </p>,
    },
    {
      title: "Modern tech",
      content: <p>Modern tech</p>,
    },
  ];

  const Checkbox = ({ id, label }) => {
    return (
      <div>
        <input type="checkbox" id={id} />
        <label htmlFor={id}>{label}</label>
      </div>
    );
  };
  return (
    <Sidebar>
      <Accordion>
        {sections.map((section, index) => (
          <div key={index}>
            <StyledAccordionTitle
              isActive={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            >
              {section.title}
            </StyledAccordionTitle>
            <StyledAccordionContent isActive={index === activeIndex}>
              {section.content}
            </StyledAccordionContent>
          </div>
        ))}
      </Accordion>

      <Brands>
  <p>Brands</p>
  <Checkbox id="sam" label="Samsung" />
  <Checkbox id="apple" label="Apple" />
  <Checkbox id="huawi" label="Huawei" />
  <Checkbox id="Pocco" label="Pocco" />
  <Checkbox id="Lenovo" label="Lenovo" />
</Brands>

<Features>
  <p>Features</p>
  <Checkbox id="sam" label="Samsung" />
  <Checkbox id="apple" label="Apple" />
  <Checkbox id="huawi" label="Huawei" />
  <Checkbox id="Pocco" label="Pocco" />
  <Checkbox id="Lenovo" label="Lenovo" />
</Features>
      <Features>
        <p>Features</p>
        <div>
          <input type="checkbox" id="sam" />
          <label htmlFor="sam">Samsung</label>
        </div>
        <div>
          <input type="checkbox" id="apple" />
          <label htmlFor="apple">Apple</label>
        </div>
        <div>
          <input type="checkbox" id="huawi" />
          <label htmlFor="huawi">Huawei</label>
        </div>
        <div>
          <input type="checkbox" id="Pocco" />
          <label htmlFor="Pocco">Pocco</label>
        </div>
        <div>
          <input type="checkbox" id="Lenovo" />
          <label htmlFor="Lenovo">Lenovo</label>
        </div>
      </Features>

      <Pricerange>
        <p>Price range</p>
        <input type="range" min="1" max="100" value="50" id="myRange" />

        <Labels>
          <label htmlFor="min">Min</label>
          <label htmlFor="max">Max</label>
        </Labels>
        <Inputs>
          <input type="text" id="Min" placeholder="0" />
          <input type="text" id="max" placeholder="999" />
        </Inputs>
        <button type="button">Apply</button>
      </Pricerange>
      <Condition>
        <p>Condition</p>
        <div>
          <input type="radio" id="Any" />
          <label htmlFor="Any">Any</label>
        </div>
        <div>
          <input type="radio" id="Refurbished" />
          <label htmlFor="Refurbished">Refurbished</label>
        </div>
        <div>
          <input type="radio" id="new" />
          <label htmlFor="new">Brand new</label>
        </div>
        <div>
          <input type="radio" id="items" />
          <label htmlFor="items">Old items</label>
        </div>
      </Condition>

      <Ratings>
        <p>Ratings</p>
        <div>
          <input type="checkbox" id="rating1" />
          <img src={fillstar} alt="rating" id="rating1" />
          <img src={fillstar} alt="rating" />
          <img src={fillstar} alt="rating" />
          <img src={fillstar} alt="rating" />
          <img src={fillstar} alt="rating" />
        </div>
        <div>
          <input type="checkbox" id="rating2" />
          <img src={fillstar} alt="rating" id="rating2" />
          <img src={fillstar} alt="rating" />
          <img src={fillstar} alt="rating" />
          <img src={fillstar} alt="rating" />
          <img src={star} alt="rating" />
        </div>
        <div>
          <input type="checkbox" id="rating3" />
          <img src={fillstar} alt="rating" id="rating3" />
          <img src={fillstar} alt="rating" />
          <img src={fillstar} alt="rating" />
          <img src={star} alt="rating" />
          <img src={star} alt="rating" />
        </div>
        <div>
          <input type="checkbox" id="rating4" />
          <img src={fillstar} alt="rating" id="rating4" />
          <img src={fillstar} alt="rating" />
          <img src={star} alt="rating" />
          <img src={star} alt="rating" />
          <img src={star} alt="rating" />
        </div>
      </Ratings>
    </Sidebar>
  );
};
