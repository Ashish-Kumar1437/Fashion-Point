import React from 'react'
import celebration from './img/celebration.png'
import { Link } from 'react-router-dom'
export default function OrderPlaced() {
    return (
        <div className='OrderPlacedContainer' style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: '50px' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', padding: '30px', backgroundColor: '#c0f2ff', gap: '10px' }}>
                <img src={celebration} alt="celebration" width={'100px'} />
                <h2>Your Order is Confirmed!</h2>
                <p>We'll send you a shipping confirmation email as soon as your order ships.</p>
                <div style={{ backgroundColor: 'white', fontSize: '2rem', padding: '5px 10px', border: '2px solid black', marginTop: '5px' }}><Link to='/' style={{ textDecoration: 'none', color: 'black' }}>Shop More</Link></div>
            </div>
        </div>
    )
}
