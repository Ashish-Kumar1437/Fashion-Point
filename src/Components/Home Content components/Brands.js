import React from 'react'

export default function Brands() {
   const brandsContainer={
        display:" flex",
        gap:"10px",
        padding:" 10px 10vw",
        flexDirection:" column",
        width:"100vw",
    }
    const row={
        width:"100%",
        display:" flex",
        justifyContent:" center",
        gap:"5px",
    }
    const rowImg={
        width:"25%",
        height:" 100px",
    }
  return (
    <section className="brands-container" style={brandsContainer}>
    <div className="row" style={row}>
        <img style={rowImg} src={require("../img/brands logo/1.png")} alt="brands"/>
    </div>
    <div className="row" style={row}>
        <img style={rowImg} src={require("../img/brands logo/2.png")} alt="brands"/>
        <img style={rowImg} src={require("../img/brands logo/3.png")} alt="brands"/>
    </div>
    <div className="row" style={row}>
        <img style={rowImg} src={require("../img/brands logo/4.png")} alt="brands"/>
        <img style={rowImg} src={require("../img/brands logo/5.png")} alt="brands"/>
        <img style={rowImg} src={require("../img/brands logo/6.png")} alt="brands"/>
    </div>
    <div className="row" style={row}>
        <img style={rowImg} src={require("../img/brands logo/7.png")} alt="brands"/>
        <img style={rowImg} src={require("../img/brands logo/8.png")} alt="brands"/>
        <img style={rowImg} src={require("../img/brands logo/9.png")} alt="brands"/>
        <img style={rowImg} src={require("../img/brands logo/10.png")} alt="brands"/>
    </div>
</section>
  )
}
