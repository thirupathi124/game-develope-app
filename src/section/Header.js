import React from "react";
import "../styles/header.css";
import {Link} from "react-router-dom";
import {Tab} from "@mui/material";
import {Tabs} from "@mui/material"


function Header() {
    return (
    
        <div className="footer">
          
             <div className="icon-nav">
                <Link to="Home"><i style={{color:"gray"}} className="bi-house-door-fill"/></Link>
                <Link to="/winner"><i style={{color:"gray"}} class="bi-trophy-fill"/></Link> 
                <Link to="/mems"><i style={{color:"gray"}} class="bi-chat-fill"/></Link>


               </div>
              
            <div className="bottom">
          
                <Link  className="home"to="/Home">Home</Link>
                <Link  className="home" to="/winner">Winner</Link>
                <Link  className="home" to="/mems">Chat</Link>
             
             </div>
            
           
        </div>    
        
    );
}
export default Header;
