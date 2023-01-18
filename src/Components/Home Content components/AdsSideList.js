import React from 'react'
import { useContext } from 'react'
import { sliderContext } from './AdsSlider'

export default function AdsSideList() {
    const {imgs,slide,gotoPoster,changePoster}=useContext(sliderContext)
  return (
    <div>
    <div className="ads-slider">
        <div className="slides" style={{transform:`translateX(-${slide * 100}%)`}} >
        {imgs.map((url,index)=>{
          return(
          <img src={url} alt="poster" key={index} width="500px" height="300px"/>)
      })}
        </div>
        <span id="prev"  onClick={()=>changePoster(-1)}>&lt;</span>
        <span id="next"  onClick={()=>changePoster(1)}>&gt;</span>
        </div>
        <div className="bottom-circle">
        <span className={`circle ${slide===0?"selected":""}`} onClick={()=>gotoPoster(0)}></span>
        <span className={`circle ${slide===1?"selected":""}`} onClick={()=>gotoPoster(1)}></span>
        <span className={`circle ${slide===2?"selected":""}`} onClick={()=>gotoPoster(2)}></span>
        </div>
        </div>
  )
}
