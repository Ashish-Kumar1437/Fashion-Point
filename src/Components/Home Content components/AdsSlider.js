import React from 'react'
import './AdsSlider.css';
export default function AddSlider() {
 
//   let index=0;
//   // const slide=document.querySelector('.slides');
//   // const circle=document.querySelectorAll('.circle');
//   const [slide,setslide] = useState({value:0})
//   const position ={
//     transform:`translateX(-${slide.value}%)`
// }
//   function ChangePoster(num=1){
//       index=index+num;
//       if(index>2) index=0;
//       else if(index<0) index=2;
//       setslide(100*index);
//     //   circle.forEach((item)=>item.style.backgroundColor='rgba(128, 128, 128, 0.425)');
//     //   circle[index].style.backgroundColor="rgba(128, 128, 128, 1)";
//     //   slide.style.transform=`translateX(-${100 * index}%)`;});
//   }
//     setInterval(()=>ChangePoster(1),1000);
    
  // function Posternum(num){
  //     index=num;
      // circle.forEach((item)=>item.style.backgroundColor='rgba(128, 128, 128, 0.425)');
      // circle[num].style.backgroundColor="rgba(128, 128, 128, 1)";
  //     slide.style.transform=`translateX(-${100 * num}%)`;
  // }
  return (
    <section className="ads-slider-sec">
    <div className="ads-slider">
        <div className="slides">
            <img src={require("../img/poster1.png")} alt="" />
            <img src={require("../img/poster2.png")} alt="" />
            <img src={require("../img/poster3.png")} alt="" />
        </div>
        <span id="prev"  onClick={"ChangePoster(-1)"}>&lt;</span>
        <span id="next"  onClick={"ChangePoster(1)"}>&gt;</span>
    </div>
    <div className="bottom-circle">
        <span className="circle" onClick={"Posternum(0)"}></span>
        <span className="circle" onClick={"Posternum(1)"}></span>
        <span className="circle" onClick={"Posternum(2)"}></span>
    </div>
</section>
  )
}
