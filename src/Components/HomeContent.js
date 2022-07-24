import React from 'react';
import Advertisment from './Home Content components/Advertisment';
import AdsSlider from './Home Content components/AdsSlider';
import GenderSec from './Home Content components/GenderSec';
import DwmCon from './Home Content components/DwmCon';
import PaymentOffer from './Home Content components/PaymentOffer';
import Category from './Home Content components/Category';
import Brands from './Home Content components/Brands';

export default function HomeContent( props) {
 
  return (
    <>
    <Advertisment source={require("./img/advertisement.gif")}/>
    <AdsSlider/>
    <GenderSec/>
    <Advertisment source={require("./img/advertisement-2.png")}/>
    <DwmCon cart={props.cart} />
    <Advertisment source={require("./img/advertisement-5.png")}/>
    <Advertisment source={require("./img/advertisement-4.png")}/>
    <PaymentOffer/>
    <Category/>
    <Advertisment source={require("./img/advertisement-9.gif")}/>
    <Brands/>
    </>
  )
}
