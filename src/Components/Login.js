import React ,{useState}from 'react';
import {Link} from 'react-router-dom';
import './Login.css';

export default function Login(props) {

    const [password, setpassword] = useState({type:"password",eye:<ion-icon name="eye-off-outline"></ion-icon>})
    // const [eye,seteye]=useState(<ion-icon name="eye-off-outline"></ion-icon>)
    
    const togglePass= ()=>{
        if(password.type==="password"){
            setpassword({type:"text",
            eye : <ion-icon name="eye-outline"></ion-icon>});
        }
        else{
            setpassword({type:"password",
            eye : <ion-icon name="eye-off-outline"></ion-icon>});
        }
    }


    const inputs=document.querySelectorAll('input');
    
    inputs.forEach(input=>{
      input.addEventListener("focus",()=>{
        const parent=input.parentNode;
        parent.classList.add("active");
      })
      input.addEventListener("blur",()=>{
        const parent=input.parentNode;
        parent.classList.remove("active");
      })
    })
     
    const [login, setlogin] = useState({signIn:"show",signUp:""})

    const signInBtn = () =>{
        if(login.signIn !== "show"){
            setlogin({signIn:"show",signUp:""})
        }
    }
    const signupBtn = () =>{
        if(login.signUp !== "show"){
            setlogin({signIn:"hide",signUp:"show"})
        }
    }

    const loginFun = (e)=>{
        e.preventDefault();
        fetch("https://fakestoreapi.com/products/category/men's clothing")
            .then(res=>res.json())
            .then(json=>console.table(json))
        alert("login");
    }
 
    

   
  return (
    <section className="sign-in-up-container" style={props.logindisplay} >

        <div className={`form-container sign-in-form ${login.signIn}`}>
            <div className="form-box sign-in-box">
                <div className="close-btn" onClick={()=>props.toggleloginDisplay("none")}>
                    <ion-icon name="close"></ion-icon>
                </div>
                <h2>Login</h2>
                <form action="">
                    <div className="field check">
                        <ion-icon name="at-outline"></ion-icon>
                        <input type="Email" placeholder="Email ID" required />
                    </div>
                    <div className="field">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input className="password-input" type={password.type} placeholder="Password" required/>
                        <div className="eye-btn" onClick={togglePass}>
                            {password.eye}
                        </div>
                    </div>
                    <div className="forgot-link">
                        <Link to="/">Forget Password?</Link>
                    </div>
                    <input className="submit-btn" type="submit" onClick={loginFun} value="Login"/>
                </form>
                <div className="login-option">
                    <p className="text">Or, Login with...</p>
                    <div className="login-btn">
                        <Link to="/"><img src={require("./img/google.png" )} alt="google"/></Link>
                        <Link to="/"><img src={require("./img/facebook.png" )} alt="google"/></Link>
                        <Link to="/"><img src={require("./img/apple.png" )} alt="google"/></Link>
                    </div>
                </div>
            </div>
            <div className="sign-in-imgbox">
                <div className="sliding-link">
                    <p>Don't have an account?</p>
                    <span className="sign-up-btn" onClick={signupBtn}>Sign up</span>
                </div>
                <img src={require("./img/signin-img.png" )} alt="signin" />
            </div>
        </div>

        <div className={`form-container sign-up-form ${login.signUp}`}>
            <div className="sign-up-imgbox">
                <img src={require("./img/signup-img.png" )} alt="signup" />
                <div className="sliding-link">
                    <p>Already have an account?</p>
                    <span className="sign-in-btn" onClick={signInBtn}>Sign in</span>
                </div>
            </div>
            <div className="form-box sign-up-box">
                <div className="close-btn" onClick={()=>props.toggleloginDisplay("none")}>
                    <ion-icon name="close"></ion-icon>
                </div>
                <div className="login-option">
                    <div className="login-btn">
                        <Link to="/"><img src={require("./img/google.png" )} alt="google" /></Link>
                        <Link to="/"><img src={require("./img/facebook.png" )} alt="google" /></Link>
                        <Link to="/"><img src={require("./img/apple.png" )} alt="google"/></Link>
                    </div>
                    <p className="text">Or, Sign up with Email...</p>
                </div>
                <h2>Sign up</h2>
                <form action="">
                    <div className="field">
                        <ion-icon name="at-outline"></ion-icon>
                        <input type="Email" placeholder="Email ID" required/>
                    </div>
                    <div className="field">
                        <ion-icon name="person-outline"></ion-icon>
                        <input type="text" placeholder="Full Name" required/>
                    </div>
                    <div className="field">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input className="password-input" type="password" placeholder="Password" required/>
                    </div>
                    <div className="field">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input className="password-input" type="password" placeholder="Confirm password" required/>
                    </div>
                    <input className="submit-btn" type="submit" value="Sign up"/>
                </form>
            </div>

        </div>

    </section>
  )
}
