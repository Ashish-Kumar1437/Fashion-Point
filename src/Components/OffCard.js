import React,{useState} from 'react'
import './OffCard.css';
export default function OffCard() {

    const [card, setcard] = useState({sign:"back",out:false ,value:400});
    const position ={
        transform:`translateX(${card.value}px)`
    }
    const togglecard=()=>{
        if(!card.out){
            setcard({sign:"forward",out:true ,value:0})
        }
        else{
            setcard({sign:"back",out:false ,value:400})
        }
    }

  return (
    <section className="off-card-container" style={position}>
        <div className="off-card-handle" onClick={togglecard}>
            <div className="arrow">
                <ion-icon name={`caret-${card.sign}-outline`}></ion-icon>
            </div>
            <p>FLAT ₹400 OFF</p>
        </div>
        <div className="off-card-content">
            <div className="row-1">
                <div className="r1-c1">
                    <div className="pre-heading">Avail Flat</div>
                    <div className="heading-primary">₹400 OFF</div>
                    <div className="heading-secondary">+ FREE SHIPPING</div>
                </div>
                <div className="r1-c2"><img src={require("./img/400OFF.png")} alt="off" /></div>
            </div>
            <div className="row-2">
                <div className="coupon">
                    <span className="text-coupon">Coupon Code : </span>
                    <span className="code">FP400</span>
                </div>
                <div className="description">Available on your first four orders</div>
            </div>
            <div className="row-3">
                <div className="r3-c1">
                    <span className="material-symbols-outlined">
                        new_releases
                    </span>
                    <span className="text-r3">Genuine Product</span>
                </div>
                <div className="r3-c2">
                    <span className="material-symbols-outlined">
                        styler
                    </span>
                    <span className="text-r3">Try & Buy</span>
                </div>
                <div className="r3-c3">
                    <span className="material-symbols-outlined icon-r3">
                        swap_vert
                    </span>
                    <span className="text-r3">Easy Exchanges & Returns</span>
                </div>
            </div>
        </div>
    </section>
  )
}
