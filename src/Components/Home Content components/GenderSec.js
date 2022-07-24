import React from 'react'
import { Link } from 'react-router-dom';
export default function GenderSec() {
    const genderWiseSec={
        padding: '10px 10vw',
        display: 'flex',
        gap: '10px',
        width:'100vw'
    }
    const link={
        width:"33%"
    }
    const secImg={
         width:"100%"
    }
  return (
    <section className="gender-wise-section" style={genderWiseSec}>
            <Link to="/" style={link}><img style={secImg} src={require("../img/men-section.png")} alt="Men Section"/></Link>
            <Link to="/" style={link}><img style={secImg} src={require("../img/women-section.png")} alt="Women Section"/></Link>
            <Link to="/" style={link}><img style={secImg} src={require("../img/kids-section.png")} alt="Kids Section"/></Link>
        </section>
  )
}
