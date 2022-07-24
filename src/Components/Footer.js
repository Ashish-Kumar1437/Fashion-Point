import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
export default function Footer() {
  return (
    <footer className="footer-container">
        <div className="row row1">
            <div className="col r1c1">
                <h3>Customer Service</h3>
                <ul>
                <li><span>Contact Us</span></li>
                <li><span>Track Order</span></li>
                <li><span>Return Order</span></li>
                <li><span>Cancel Order</span></li>
                </ul>
            </div>
            <div className="col r1c2">
                <h3>Company</h3>
                <ul>
                <li><span>About Us</span></li>
                <li><span>We're Hiring</span></li>
                <li><span>Terms & Conditions</span></li>
                <li><span>Privacy Policy</span></li>
                <li><span>Blog</span></li>
            </ul>
            </div>
            <div className="col r1c3">
                <h3>Connect with us</h3>
                <ul>
                    <li>
                        <ion-icon name="logo-facebook"></ion-icon>
                        <span>4M People Like this</span>
                    </li>
                    <li>
                        <ion-icon name="logo-instagram"></ion-icon>
                        <span>1M Followers</span>
                    </li>
                    <li className="logo-container">
                        <div className="logo"><ion-icon name="logo-twitter"></ion-icon></div>
                        <div className="logo"><ion-icon name="logo-pinterest"></ion-icon></div>
                        <div className="logo"><ion-icon name="logo-snapchat"></ion-icon></div>
                        <div className="logo"><ion-icon name="logo-apple"></ion-icon></div>
                    </li>
                </ul>
            </div>
            <div className="col r1c4">
                <h3>keep up to date</h3>
                <div><input type="text" placeholder="Enter Email Id"/>
                  <button>SUBSCRIBE</button></div>
            </div>
        </div>
        <div className="row row2">
            <div className="col r2c1">
                <div><ion-icon name="sync-circle-outline"></ion-icon> <span>15 Days return policy<sup>*</sup></span></div>
                <div><ion-icon name="cash-outline"></ion-icon> <span>Cash on delivery<sup>*</sup></span></div>
            </div>
            <div className="col r2c2">
                <h3>Download The App</h3>
                 <Link to="/googleplay"><img src={require("./img/googleplay.png")} alt="Google Play"/></Link>
                 <Link to="/appstore"><img src={require("./img/appstore.png")} alt="App store"/></Link>
            </div>
            <div className="col r2c3">
                <h3>100% SECURE PAYMENT</h3>
                <img src={require("./img/payment-mode.png")} alt="Payment mode" />
            </div>
        </div>
    </footer>
  )
}
