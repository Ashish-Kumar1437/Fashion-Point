import React, { useState } from 'react'

export default function BasketCard(props) {
  const [qty, setqty] = useState(1);

  const handleChange = (event) => {
    const { value } = event.target;
    props.total(qty, value, props.detail.prize2);
    setqty(value);
  }
  return (
    <section className="basket">
      <div className="basket-card">
        <img src={props.detail.img2} alt="img" />
        <hr />
        <div className="product-detail">
          <h3>{props.detail.name}</h3>
          <span>color : blue</span>
          <span>size : L</span>
        </div>
        <div className="qty">
          <label htmlFor="qty">Qty:</label>
          <select name="qty" id="qty" value={qty} onChange={handleChange}>
            <option value="1">1</option>
            <option value="2" >2</option>
            <option value="3" >3</option>
            <option value="4" >4</option>
            <option value="5" >5</option>
          </select>
        </div>
        <div className="product-prize">
          {/* <span>₹{props.detail.prize1}</span> */}
          <span>₹{props.detail.prize2 * qty}</span>
          {/* <span>({props.detail.dis} off)</span> */}
        </div>
      </div>
      <button onClick={() => { props.total(qty, 0, props.detail.prize2); props.remove(props.index) }}>Remove</button>
    </section>
  )
}
