import React from 'react'
import { ProductCard, Productdetail } from './style'

export const Product = (props) => {
  return (
    <ProductCard>
        <Productdetail>
        <p>{props.title}</p>
        <span>{props.price}</span>
        </Productdetail>
        <img src={props.img} alt={props.alt} />
        </ProductCard>
  )
}
