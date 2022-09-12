import React from "react"
import "../styles/login.css"
import {Link} from "react-router-dom"

function Login(){
    return(
        <div className="login">
            <div>
            <div className="login-flex">
            <i  style={{color:"#1fb3f0",fontSize:"29px"}} className="bi-moon-stars-fill"></i>
            <p className="login-title">easy11mone<h2 className="y">y</h2></p>
            </div>
             <h4 className="welcome">Welcome Back</h4>
             <div className="tele">
              <i style={{fontSize:"20px"}} className="bi-telegram"/>
              <p className="join-tele">Join Telegram</p>
             </div>
             <p className="and">________AND________</p>
             <div className="user-data">
             <input className="name" type="text" placeholder="Yourname"/><br/>
             <input className="number" type="number" placeholder="Phonenumber"/>
             </div>
             <Link to="/Home" className="login-btn">Log In</Link>
            </div>
        </div>
    )
}

export default Login;