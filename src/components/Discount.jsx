import React from 'react'
import { Discounts, ShopButton, Shopnow, SuperDiscount } from './style'
import superDis from "./../Images/super.png";


export const Discount = () => {
  return (
    <Discounts>
        <SuperDiscount>
        <img src={superDis} alt="discount" />
        <p>
        Super discount on more than 100 USD
        </p>
        <span>Have you ever finally just write dummy info</span>
        </SuperDiscount>

        <Shopnow>
            <ShopButton>Shop now</ShopButton>
        </Shopnow>
    </Discounts>
  )
}
