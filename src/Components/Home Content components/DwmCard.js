import React from 'react';
import './Dwm.css';
import basket from '../BasketProducts';
export default function DwmCard(props) {
   const [text, settext] = React.useState("Add to cart");
   const toggle = ()=> { 
    if(text === "Remove") props.cart(-1)
    else props.cart(1)
    console.log(basket.findIndex(obj => {return (obj.key===props.content.key)}))
    // const index=0
    text === "Add to cart" ?  basket.push({key:props.content.key, detail:props.content}) : basket.splice(basket.findIndex(obj => {return (obj.key===props.content.key)}),1)
    settext((prevtext)=> prevtext === "Add to cart" ? "Remove" : "Add to cart")
    console.log(basket)
   }

  return (
    <div className="card">
                            <div className="card-1">
                                <div className="content-1">
                                    <img className="img" src={props.content.img1} alt=""/>
                                    <h3>{props.content.name}</h3>
                                    <span className="subtitle">{props.content.dis} <span className="underline">Discount</span></span>
                                </div>
                            </div>

                            <div className="card-2">
                                <img className="img" src={props.content.img2} alt=""/>

                                <div className="content-2">
                                    <div className="prize">
                                        <h3>Prize :</h3><span><s>₹{props.content.prize1}</s> ₹{props.content.prize2}</span>
                                    </div>

                                    <div className="color">
                                        <h3>Color :</h3>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>

                                    <div className="size">
                                        <h3>Size : </h3>
                                        <span>S</span>
                                        <span>M</span>
                                        <span>L</span>
                                        <span>XL</span>
                                    </div>

                                    <h4>Offer available for only this week!</h4>
                                    <div className="content-2-buttons">
                                        <button className="wishlist">
                                            <ion-icon name="heart-outline"></ion-icon>
                                        </button>
                                        <button className="cart" onClick={toggle}><span>{text}</span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
  )
}
