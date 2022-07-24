import React from 'react'
import './Basket.css'
import BasketProducts from './BasketProducts'
import BasketCard from './BasketCard'
export default function Basket() {
  const products =BasketProducts.map(product => (<BasketCard key={product.key} detail={product.detail} />))
  // console.log(products.length)
  // console.log(BasketProducts.length)
  return (
    <div>
    {products.length > 0 && products}
    </div>
  )
}
