import React from 'react';
import DwmCard from './DwmCard';
import './Dwm.css';
import boys from './boysDwmList'
import girls from './girlsDwmList'
export default function DwmCon(props) {
    
   const boysCards= boys.map(boy => <div key={boy.key} className={`card-container cm-${boy.key}`}>
   <DwmCard content={boy} cart={props.cart}/>
</div>)
   const girlsCards= girls.map(girl => <div  key={girl.key} className={`card-container cg-${girl.key}`}>
   <DwmCard content={girl} cart={props.cart}/>
</div>)

    const [boyMargin, setboyMargin] = React.useState(0)
    const [girlMargin, setgirlMargin] = React.useState(0)
    const next =()=>{
        if(boyMargin !== -80)
        setboyMargin(prevMargin => prevMargin - 20)
    }
    const prev =()=>{
        if(boyMargin !== 0)setboyMargin(prevMargin => prevMargin + 20)
    }
    
  return (
    <section className="DWM-container">
            <div className="heading-dwm">
                <h2>OFFERS OF THE WEEK</h2>
            </div>
            <div className="heading-men">
                <h2>For Men</h2>
            </div>
            <div className="design-of-week-men">
                <div className="slider-box-dwm" style={{marginLeft:`${boyMargin}vw`}}>
                    <button className={`prev-dwm ${boyMargin === 0 ? "disabled" : ""}`} onClick={prev}>
                        &lt;</button>
                    {boysCards}
                    <button className={`next-dwm ${boyMargin === -80 ? "disabled" : ""}`} onClick={next}>&gt;</button>
                </div>
            </div>
            <div className="heading-women">
                <h2>For Women</h2>
            </div>
            <div className="design-of-week-women">
                <div className="slider-box-dwm" style={{marginLeft:`${girlMargin}vw`}}>
                    <button className={`prev-dwm ${girlMargin === 0 ? "disabled" : ""}`} onClick={()=>{
                        if(girlMargin !== 0)
                        setgirlMargin(prevMargin => prevMargin + 20)
                    }}>&lt;</button>
                    {girlsCards}
                    <button className={`next-dwm ${girlMargin === -80 ? "disabled" : ""}`} onClick={()=>{
                        if(girlMargin !== -80)
                        setgirlMargin(prevMargin => prevMargin - 20)
                    }}>&gt;</button>
                </div>
            </div>
        </section>
  )
}
