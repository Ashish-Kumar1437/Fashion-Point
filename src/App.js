import {useState}from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import OffCard from './Components/OffCard';
import {BrowserRouter as Router , Routes , Route,} from "react-router-dom"
import HomeContent from './Components/HomeContent';
import Footer from './Components/Footer';
import Basket from './Components/Basket';

function App() {
  const [logindisplay, setlogindisplay] = useState({display:"none"})
  const [inCart, setinCart] = useState(0)

    const toggleloginDisplay= (val) => {
           if(val !== logindisplay.display){
            setlogindisplay({display:val})
           }
    }
    const cart= (num)=>{
      setinCart(prevcart => prevcart + num)
    }
  return (
    <Router>
    <Navbar toggleloginDisplay={toggleloginDisplay} inCart={inCart}  />
    <Login logindisplay={logindisplay} toggleloginDisplay={toggleloginDisplay} />
    <OffCard />
    <Routes>
    <Route exact path="/" element={<HomeContent cart={cart}/>}> </Route>
    <Route exact path="/cart" element={<Basket />}> </Route>
    </Routes>
    <Footer/>
    </Router>
  );
}

export default App;
