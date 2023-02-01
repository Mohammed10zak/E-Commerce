import React from 'react'
import { SupplierRegion } from './style'

export const Supplier = (props) => {
  return (
    <SupplierRegion>
        <div>
            <img src={props.SupplierImg} alt={props.Supplieralt}/>
        </div>

        <div>
        <p>{props.country}</p>
        <span>{props.site}</span>
        </div>
    </SupplierRegion>
  )
}
