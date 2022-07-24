import React from 'react'

export default function BasketCard(props) {
  return (
    <section className="basket">
    <div className="basket-card">
    <img src={props.detail.img2} alt="img"/>
    <hr />
    <div className="product-detail">
      <h3>{props.detail.name}</h3>
      <span>color : blue</span>
      <span>size : L</span>
    </div>
    <div className="qty">
          <label htmlFor="qty">Qty:</label>
          <select name="qty" id="qty">
              <option defaultValue={1}>1</option>
              <option value="2" >2</option>
              <option value="3" >3</option>
              <option value="4" >4</option>
              <option value="5" >5</option>
          </select>
    </div>
    <div className="product-prize">
      <span>₹{props.detail.prize1}</span>
      <span>₹{props.detail.prize2}</span>
      <span>({props.detail.dis} off)</span>
    </div>
</div>
<button>Remove</button>
</section>
  )
}
