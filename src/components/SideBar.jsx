import React from "react";
import {
  Sidebar,
  Accordion,
  AccordionTitle,
  AccordionContent,
  Brands,
  Features,
  Pricerange,
  Labels,
  Ratings,
  Condition,
  Inputs,
} from "./style";
import { useState } from "react";

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
  return (
      <Sidebar>
        <Accordion>
          {sections.map((section, index) => (
            <div key={index}>
              <AccordionTitle
                onClick={() => setActiveIndex(index)}
                style={{
                  backgroundColor:
                    index === activeIndex ? "#e6e6e6" : "#f2f2f2",
                }}
              >
                {section.title}
              </AccordionTitle>
              <AccordionContent
                style={{
                  display: index === activeIndex ? "block" : "none",
                }}
              >
                {section.content}
              </AccordionContent>
            </div>
          ))}
        </Accordion>

        <Brands>
          <p>Brands</p>
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
        </Brands>

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
            <input type="radio" id="Any" />
            <label htmlFor="Any"></label>
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
        </Ratings>
      </Sidebar>
  );
};
