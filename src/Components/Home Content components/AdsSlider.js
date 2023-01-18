import React,{useState,useEffect,createContext} from 'react'
import './AdsSlider.css';
import p1 from '../img/poster1.png';
import p2 from '../img/poster2.png';
import p3 from '../img/poster3.png';
import AdsSideList from './AdsSideList';


export const sliderContext=createContext();

export default function AddSlider() {
  const [slide, setslide] = useState(0);
  const imgs=[p1,p2,p3]

 const changePoster=(direction=1)=>{
    let slideNumber=0;
    if(slide+direction<0){
        slideNumber=imgs.length-1;
    }
    else{
        slideNumber=(slide+direction)%imgs.length;
    }
    setslide(slideNumber);
}

const gotoPoster=(number)=>{
    setslide(number % imgs.length);
}

useEffect(() => {
  const interval=setInterval(()=>{
    changePoster(1);
  },5000);

  return () => {
    clearInterval(interval);
  };
});
  

  return (
    <section className="ads-slider-sec">
    <sliderContext.Provider  value={{
      gotoPoster,changePoster,imgs,slide:slide
    }}>
    <AdsSideList/>
    </sliderContext.Provider>
    
        </section>
        )
      }