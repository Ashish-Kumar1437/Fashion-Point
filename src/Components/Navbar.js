import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
export default function Navbar(props) {

    const kidImg = {
        width: `${200}px`,
        height : `${200}px` };
    
        window.onscroll=function(){nav()};
        const [navbar, setnavbar] = useState({bottomNav:"bottom-nav",logo:"logo fix-nav-hide",btn:"mid-nav-right fix-nav-hide",flag:false})
        function nav(){
          if( document.documentElement.scrollTop > 220 && !navbar.flag){
            setnavbar({
                bottomNav:"bottom-nav fix-nav",logo:"logo",btn:"mid-nav-right",flag:true
            })
             setTimeout(()=>{setnavbar({
                bottomNav:"bottom-nav fix-nav slide",logo:"logo",btn:"mid-nav-right",flag:true
            })},100);
           }
           else if(document.documentElement.scrollTop < 220 && navbar.flag){
            setnavbar({
                bottomNav:"bottom-nav",logo:"logo fix-nav-hide",btn:"mid-nav-right fix-nav-hide",flag:false
            })
           }
         }

  return (
    <header className="nav-container">
    <div className="top-nav">
        <div className="top-nav-left">
            <Link to="/" id="locate-store">
                <ion-icon name="location-outline"></ion-icon>
                <span>Locate Store</span>
            </Link>
            <hr/>
            <Link to="/" id="get-app">
                <ion-icon name="download-outline"></ion-icon>
                <span>Get APP</span>
            </Link>
        </div>
        <div className="top-nav-middle">
            <Link to="/" id="discount">
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <div><span id="discount-text">U.S. Polo Assn. : Extra 10% Off on a buy of ₹2000 | Code: ALL10</span>
                </div>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
            </Link>
        </div>
        <div className="top-nav-right">
            <Link to="/" id="order">
                <ion-icon name="cube-outline"></ion-icon>
                <span>Track Order</span>
            </Link>
            <hr/>
            <Link to="/" id="instagram">
                <ion-icon name="logo-instagram"></ion-icon>
                <span>Instagram</span>
            </Link>
        </div>
    </div>
    <div className="mid-nav">
        <div className="mid-nav-left">
            <form>
                <label htmlFor="search">
                    <ion-icon name="search"></ion-icon>
                </label>
                <input type="text" placeholder="Search FP" name="search" id="search" />
            </form>
        </div>
        <div className="mid-nav-mid">
            <Link to="/"><img src={require("./img/Fashion point-logos_transparent.png")} alt="logo" id="logo"/></Link>
        </div>
        <div className="mid-nav-right">
            <Link to="/" id="wishlist">
                <ion-icon name="heart-outline"></ion-icon>
            </Link>
            <hr/>
            <Link to="/cart" className="bag">
                <ion-icon name="cart-outline"></ion-icon>
                <span id="basket">{props.inCart}</span>
            </Link>
            <hr/>
            <Link to="/" className="login-id" onClick={()=>props.toggleloginDisplay("flex")}>
                <ion-icon name="person"></ion-icon><span id="login">Login</span>
            </Link>
        </div>
    </div>
    <div className={navbar.bottomNav}>
        <div className={navbar.logo}><img src={require("./img/Fashion point-logos_transparent.png")} alt="logo"/></div>
       { <ul>
            <li>
                <Link to="/">MEN</Link>
                <div className="menu-container">
                    <div className="menu-content">
                        <ul>
                            <li><Link to="/">top wear</Link>
                                <ul className="content">
                                    <li><Link to="/">T-Shirts & Polos</Link></li>
                                    <li><Link to="/">Casual Shirts</Link></li>
                                    <li><Link to="/">Formal Shirts</Link></li>
                                    <li><Link to="/">Sweatshirts</Link></li>
                                    <li><Link to="/">Jackets</Link></li>
                                    <li><Link to="/">Suits & Blazers</Link></li>
                                    <li><Link to="/">Sweaters</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/">BottomWEAR</Link>
                                <ul className="content">
                                    <li><Link to="/">Jeans</Link></li>
                                    <li><Link to="/">chinos</Link></li>
                                    <li><Link to="/">Formal Trousers</Link></li>
                                    <li><Link to="/">casual Trousers</Link></li>
                                    <li><Link to="/">Shorts</Link></li>
                                    <li><Link to="/">Track Pants</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/">Footwear</Link>
                                <ul className="content">
                                    <li><Link to="/">Formal shoes</Link></li>
                                    <li><Link to="/">Casual shoes</Link></li>
                                    <li><Link to="/">Sneakers</Link></li>
                                    <li><Link to="/">Loafers</Link></li>
                                    <li><Link to="/">Sandals</Link></li>
                                    <li><Link to="/">Flip Flops</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/">Accessories</Link>
                                <ul className="content">
                                    <li><Link to="/">Caps & Hats</Link></li>
                                    <li><Link to="/">Belts & Wallets</Link></li>
                                    <li><Link to="/">Sunglasses & Watches</Link></li>
                                    <li><Link to="/">Bags & Backpacks</Link></li>
                                    <li><Link to="/">Fragrances</Link></li>
                                    <li><Link to="/">Face Mask</Link></li>
                                    <li><Link to="/">Deodorants</Link></li>
                                    <li><Link to="/">Grooming & Personal care</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/">Innerwear</Link>
                                <ul className="content">
                                    <li><Link to="/">Briefs</Link></li>
                                    <li><Link to="/">Trunks</Link></li>
                                    <li><Link to="/">vests</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/">Brands</Link>
                                <ul className="content">
                                    <li><Link to="/">U.S. Polo Assan.</Link></li>
                                    <li><Link to="/">Calvin Klein</Link></li>
                                    <li><Link to="/">Tommy Hilfiger</Link></li>
                                    <li><Link to="/">Flying Machine</Link></li>
                                    <li><Link to="/">Aéropostale</Link></li>
                                    <li><Link to="/">Arrow</Link></li>
                                    <li><Link to="/">Ruggers</Link></li>
                                    <li><Link to="/">Colt</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <img src={require("./img/Men.png")} alt="ads" />
                    </div>
                </div>
            </li>
            <li>
                <Link to="/">WOMEN</Link>
                <div className="menu-container">
                    <div className="menu-content">
                        <ul>
                            <li><Link to="/">top wear</Link>
                                <ul className="content">
                                    <li><Link to="/">T-Shirts & tops</Link></li>
                                    <li><Link to="/">Polo T-shirts</Link></li>
                                    <li><Link to="/">shirts</Link></li>
                                    <li><Link to="/">Dresses & Jumpsuits</Link></li>
                                    <li><Link to="/">Shrugs</Link></li>
                                    <li><Link to="/">Jackets</Link></li>
                                    <li><Link to="/">Sweatshirts</Link></li>
                                    <li><Link to="/">Cardigans</Link></li>
                                    <li><Link to="/">Sweaters</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/">BottomWEAR</Link>
                                <ul className="content">
                                    <li><Link to="/">Jeans</Link></li>
                                    <li><Link to="/">Leggings</Link></li>
                                    <li><Link to="/">Trousers</Link></li>
                                    <li><Link to="/">Joggers</Link></li>
                                    <li><Link to="/">Treggings & Jeggings</Link></li>
                                    <li><Link to="/">Track Pants</Link></li>
                                    <li><Link to="/">Skirts</Link></li>
                                    <li><Link to="/">shorts</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/">Ethic wear</Link>
                                <ul className="content">
                                    <li><Link to="/">Kurtas</Link></li>
                                    <li><Link to="/">tunics</Link></li>
                                    <li><Link to="/">Ethnic sets</Link></li>
                                    <li><Link to="/">Ethnic Bottoms</Link></li>
                                    <li><Link to="/">palazzos</Link></li>
                                    <li><Link to="/">churidars</Link></li>
                                    <li><Link to="/">Duppattas & stoles</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/">Innerwear</Link>
                                <ul className="content">
                                    <li><Link to="/">Camisole</Link></li>
                                    <li><Link to="/">panties</Link></li>
                                    <li><Link to="/">bra</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/">Footwear</Link>
                                <ul className="content">
                                    <li><Link to="/">Sandals</Link></li>
                                    <li><Link to="/">sneakers</Link></li>
                                    <li><Link to="/">belly shoes</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/">Accessories</Link>
                                <ul className="content">
                                    <li><Link to="/">Belts & Wallets</Link></li>
                                    <li><Link to="/">Sunglasses & Watches</Link></li>
                                    <li><Link to="/">Bags & Backpacks</Link></li>
                                    <li><Link to="/">Fragrances</Link></li>
                                    <li><Link to="/">Face Mask</Link></li>
                                    <li><Link to="/">Deodorants</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/">Brands</Link>
                                <ul className="content">
                                    <li><Link to="/">Sephora</Link></li>
                                    <li><Link to="/">U.S. Polo Assan.</Link></li>
                                    <li><Link to="/">Calvin Klein</Link></li>
                                    <li><Link to="/">Tommy Hilfiger</Link></li>
                                    <li><Link to="/">Flying Machine</Link></li>
                                    <li><Link to="/">Aéropostale</Link></li>
                                    <li><Link to="/">Anahi</Link></li>
                                    <li><Link to="/">Karigari</Link></li>
                                    <li><Link to="/">SHFFL</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <img src={require("./img/Women.png")} alt="ads" />
                    </div>
                </div>
            </li>
            <li>
                <Link to="/">KIDS</Link>
                <div className="menu-container">
                    <div className="menu-content">
                        <ul>
                            <li><Link to="/">Boys clothing</Link>
                                <ul className="content">
                                    <li><Link to="/">Polos & T-Shirts</Link></li>
                                    <li><Link to="/">Sweatshirts</Link></li>
                                    <li><Link to="/">Jeans</Link></li>
                                    <li><Link to="/">Shirts</Link></li>
                                    <li><Link to="/">pants</Link></li>
                                    <li><Link to="/">shorts</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/">GIRLS CLOTHING</Link>
                                <ul className="content">
                                    <li><Link to="/">Tops & T-shirts</Link></li>
                                    <li><Link to="/">Dresses</Link></li>
                                    <li><Link to="/">Leggings & Jeggings</Link></li>
                                    <li><Link to="/">Jackets</Link></li>
                                    <li><Link to="/">Sweaters</Link></li>
                                    <li><Link to="/">Shorts</Link></li>
                                    <li><Link to="/">Sweatshirts</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/">Infants</Link>
                                <ul className="content">
                                    <li><Link to="/">Rompers</Link></li>
                                    <li><Link to="/">T-shirts</Link></li>
                                    <li><Link to="/">Bodysuits</Link></li>
                                    <li><Link to="/">Leggings</Link></li>
                                    <li><Link to="/">Sweatshirts & sweaters</Link></li>
                                    <li><Link to="/">sets</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/">Accessories</Link>
                                <ul className="content">
                                    <li><Link to="/">Jewellery</Link></li>
                                    <li><Link to="/">Sunglasses</Link></li>
                                    <li><Link to="/">Bags & Backpacks</Link></li>
                                    <li><Link to="/">Footwear</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/">Brands</Link>
                                <ul className="content">
                                    <li><Link to="/">Ruggers Junior</Link></li>
                                    <li><Link to="/">U.S. Polo Assan.</Link></li>
                                    <li><Link to="/">sugr girl</Link></li>
                                    <li><Link to="/">Tommy Hilfiger</Link></li>
                                    <li><Link to="/">Flying Machine boys</Link></li>
                                    <li><Link to="/">Donuts</Link></li>
                                    <li><Link to="/">karigari</Link></li>
                                    <li><Link to="/">KIDS BANNER</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <img src={require("./img/Kids.png")} alt="ads" style={kidImg} />
                    </div>
                </div>
            </li>
            <li>
                <Link to="/">SEPHORA</Link>
                <div className="menu-container">
                    <div className="menu-content">
                        <ul className="content-mid">
                            <li><Link to="/">Makeup</Link>
                                <ul className="content">
                                    <li><Link to="/">Face</Link></li>
                                    <li><Link to="/">Eye</Link></li>
                                    <li><Link to="/">Lip</Link></li>
                                    <li><Link to="/">cheek</Link></li>
                                    <li><Link to="/">Nails</Link></li>
                                    <li><Link to="/">Tools & Brushes</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/">Skincare</Link>
                                <ul className="content">
                                    <li><Link to="/">Face</Link></li>
                                    <li><Link to="/">Body</Link></li>
                                    <li><Link to="/">Tools & brushes</Link></li>
                                    <li><Link to="/">Hand Sanitizers</Link></li>
                                    <li><Link to="/">Hand Wash</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/">Fragrance</Link>
                                <ul className="content">
                                    <li><Link to="/">For Men</Link></li>
                                    <li><Link to="/">For Women</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/">Haircare</Link>
                                <ul className="content">
                                    <li><Link to="/">Shampoo</Link></li>
                                    <li><Link to="/">Conditioner</Link></li>
                                    <li><Link to="/">Hair Styling</Link></li>
                                    <li><Link to="/">Hair Treatment</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/">Bath & Body</Link>
                                <ul className="content">
                                    <li><Link to="/">bath & shower</Link></li>
                                    <li><Link to="/">Lotion & creams</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/">Tools & Brushes</Link>
                                <ul className="content">
                                    <li><Link to="/">skincare</Link></li>
                                    <li><Link to="/">Makeup Brushes & Applicators</Link></li>
                                    <li><Link to="/">Accessories</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
            <li>
                <Link to="/">FOOTWEAR</Link>
                <div className="menu-container">
                    <div className="menu-content">
                        <ul className="content-mid">
                            <li><Link to="/">Men</Link>
                                <ul className="content">
                                    <li><Link to="/">Sneakers</Link></li>
                                    <li><Link to="/">Casual Shoes</Link></li>
                                    <li><Link to="/">Formal Shoes</Link></li>
                                    <li><Link to="/">Loafers</Link></li>
                                    <li><Link to="/">Sandals</Link></li>
                                    <li><Link to="/">Flip Flops</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/">Women</Link>
                                <ul className="content">
                                    <li><Link to="/">Sandals</Link></li>
                                    <li><Link to="/">Sneakers</Link></li>
                                    <li><Link to="/">Belly shoes</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/">Kids</Link>
                                <ul className="content">
                                </ul>
                            </li>
                            <li><Link to="/">Top Footwear Brands</Link>
                                <ul className="content">
                                    <li><Link to="/">Cole Haan</Link></li>
                                    <li><Link to="/">Tommy Hilfiger</Link></li>
                                    <li><Link to="/">Calvin Klein</Link></li>
                                    <li><Link to="/">U.S. Polo Klein</Link></li>
                                    <li><Link to="/">Arrow</Link></li>
                                    <li><Link to="/">Flying Machine</Link></li>
                                    <li><Link to="/">Stride</Link></li>
                                    <li><Link to="/">Guess</Link></li>
                                    <li><Link to="/">Ruggers</Link></li>
                                    <li><Link to="/">SUGR</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
            <li>
                <Link to="/">BRANDS</Link>
                <div className="menu-container">
                    <div className="menu-content">
                        <ul className="content-mid">
                            <li><Link to="/">Top Apparel Brands</Link>
                                <ul className="content">
                                    <li><Link to="/">Arrow</Link></li>
                                    <li><Link to="/">U.S. Polo Assn.</Link></li>
                                    <li><Link to="/">Calvin Klein</Link></li>
                                    <li><Link to="/">Tommy Hilfiger</Link></li>
                                    <li><Link to="/">Flying Machine</Link></li>
                                    <li><Link to="/">Aeropostale</Link></li>
                                    <li><Link to="/">Colt</Link></li>
                                    <li><Link to="/">Ruggers</Link></li>
                                    <li><Link to="/">Anahi</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/">TOP BEAUTY BRANDS</Link>
                                <ul className="content">
                                    <li><Link to="/">Sephora Collection</Link></li>
                                    <li><Link to="/">Pixi</Link></li>
                                    <li><Link to="/">Benefit Cosmetic</Link></li>
                                    <li><Link to="/">CLINIQUE</Link></li>
                                    <li><Link to="/">Elizabeth Arden</Link></li>
                                    <li><Link to="/">TOM FORD</Link></li>
                                    <li><Link to="/">Anastasia Beverly Hill</Link></li>
                                    <li><Link to="/">Estee Lauder</Link></li>
                                    <li><Link to="/">HUDA BEAUTY</Link></li>
                                    <li><Link to="/">Make Up For Ever</Link></li>
                                    <li><Link to="/">Bobbi Brown</Link></li>
                                    <li><Link to="/">FOREO</Link></li>
                                    <li><Link to="/">Guerlain</Link></li>

                                </ul>
                            </li>
                            <li><Link to="/">TOP FOOTWEAR BRANDS</Link>
                                <ul className="content">
                                    <li><Link to="/">Cole Haan</Link></li>
                                    <li><Link to="/">Tommy Hilfiger</Link></li>
                                    <li><Link to="/">Calvin Klein</Link></li>
                                    <li><Link to="/">U.S. Polo Assn.</Link></li>
                                    <li><Link to="/">Arrow</Link></li>
                                    <li><Link to="/">Flying Machine</Link></li>
                                    <li><Link to="/">Stride</Link></li>
                                    <li><Link to="/">Guess</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/">All brands</Link>
                                <ul className="content">
                                    <li><Link to="/">U.S. Polo Assn.</Link></li>
                                    <li><Link to="/">Calvin Klein</Link></li>
                                    <li><Link to="/">Tommy Hilfiger</Link></li>
                                    <li><Link to="/">Flying Machine</Link></li>
                                    <li><Link to="/">Aeropostale</Link></li>
                                    <li><Link to="/">Arrow</Link></li>
                                    <li><Link to="/">Arvind</Link></li>
                                    <li><Link to="/">SHFFL</Link></li>
                                    <li><Link to="/">Donuts</Link></li>
                                    <li><Link to="/">SUGR</Link></li>
                                    <li><Link to="/">Ruggers</Link></li>
                                    <li><Link to="/">Karigari</Link></li>
                                    <li><Link to="/">Anahi</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
       </ul> }
        <div className={navbar.btn}>
            <Link to="/cart" className="bag">
                <ion-icon name="cart-outline"></ion-icon>
                <span id="basket">{props.inCart}</span>
            </Link>
            <hr />
            <Link to="/" className="login-id" onClick={()=>props.toggleloginDisplay("flex")}>
                <ion-icon name="person"></ion-icon><span id="login">Login</span>
            </Link>
        </div>
    </div>
</header>
  )
}
