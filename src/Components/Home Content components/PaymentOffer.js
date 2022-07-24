import React from 'react'

export default function PaymentOffer() {
    const paymentOffers={
        display: 'flex',
        gap: '15px',
        justifyContent: 'space-between',
        padding: '10px 10vw'
    }
    const paymentImg={
        width: '25rem'
    }
    
  return (
    <section className="payment-offers" style={paymentOffers}>
            <img style={paymentImg} src={require("../img/advertisement-6.png")} alt="" />
            <img style={paymentImg} src={require("../img/advertisement-7.png")} alt="" />
            <img style={paymentImg} src={require("../img/advertisement-8.png")} alt="" />
        </section>
  )
}
