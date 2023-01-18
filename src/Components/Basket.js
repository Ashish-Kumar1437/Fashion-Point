import React, { useState, useEffect } from 'react'
import './Basket.css'
import BasketProducts from './BasketProducts'
import BasketCard from './BasketCard'
import { Link } from 'react-router-dom'
export default function Basket(props) {

  const [products, setproducts] = useState([])


  const removeProduct = (index) => {
    props.cart(-1);
    BasketProducts.splice(index, 1);
    setproducts(BasketProducts.map((product, i) => (<BasketCard key={i} index={i} remove={removeProduct} detail={product.detail} total={calculateTotal} />)));
  }


  useEffect(() => {
    setproducts(BasketProducts.map((product, i) => { return (<BasketCard key={i} index={i} remove={removeProduct} detail={product.detail} total={calculateTotal} />) }));
    let p = 0;
    BasketProducts.forEach(product => { p += product.detail.prize2; })
    setTotal(p);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  const [total, setTotal] = useState(0);
  const calculateTotal = (before, after, prize) => {
    setTotal((prev) => (prev - before * prize + after * prize));
  }
  const h2Style = {
    textAlign: "center",
    fontSize: "2em",
    fontFamily: 'Material Symbols Outlined',
    wordSpacing: "-10px",
    height: "20vh",
    width: '100%'
  }
  return (
    <div className="basketContainer" style={{ display: 'flex', gap: '20px' }}>
      {products.length <= 0 ? <h2 style={h2Style}>You don't have any items in your cart</h2>
        : <div>
          {products}
        </div>}
      {products.length > 0 && <div className="bill">
        <div className="overview">
          <h2>Overview</h2>
          <div className="billrow">
            <h3>Subtotal</h3>
            <span>Rs {total}</span>
          </div>
          <div className="billrow discount">
            <h3>Discount</h3>
            <span>-Rs {Math.floor(total / 10)}</span>
          </div>
          <div className="billrow">
            <h3>GST</h3>
            <span>Rs {Math.floor((total * 5) / 100)}</span>
          </div>
          <div className="billrow">
            <h3>Delivery Charges</h3>
            <span>Rs {total > 999 ? 0 : 90}</span>
          </div>
          <div className="billrow total">
            <h3>Total</h3>
            <span>Rs {total - (Math.floor(total / 10)) + (Math.floor((total * 5) / 100)) + (total > 999 ? 0 : 90)}</span>
          </div>
        </div>
        <div className="btnc checkout">
          <Link to='/orderPlaced'>
            Checkout
          </Link>
        </div>
        <div className="btnc shop">
          <Link to='/'>
            Shop More
          </Link>
        </div>
      </div>}
    </div>
  )
}
