import React from "react";
import "../styles/header.css";
import {Link} from "react-router-dom";


function Header() {
    return (
        <div className="footer">
             <div className="icon-nav">
                <Link to="Home"><i style={{color:"black"}} className="bi-house-door-fill"/></Link>
                <Link to="/winner"><i style={{color:"black"}} class="bi-trophy-fill"/></Link> 
                <Link to="/mems"><i style={{color:"black"}} class="bi-telegram"/></Link>


               </div>
            <div className="bottom">
          
                <Link  className="home"to="/Home">Home</Link>
                <Link  className="home" to="/winner">Winner</Link>
                <Link  className="home" to="/mems">Telegarm</Link>

            </div>
        </div>    
    );
}
export default Header;
