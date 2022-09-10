import React from "react";
import "../styles/menu.css";

function Menu({setMenu}){
    return(
      <>
      
        <div className="create-ad">
          <div className="menu-top">
            <div className="divflex">
            <p className="menu-title">easy11money</p>
            <i  style={{color:"white",fontSize:"29px"}} className="bi-moon-stars-fill"></i>
            </div>
            
           </div>
           <div className="menu-link">
            <div className="offical">
              <i style={{fontSize:"20px"}} className="bi-people"/>
              <p>Offical Group</p>
            </div>
            <div className="offical">
              <i style={{fontSize:"20px",color:"green"}} className="bi-joystick"/>
              <p>How to Play</p>
            </div>
            <div className="offical">
              <i style={{fontSize:"20px"}} className="bi-telegram"/>
              <p>Join Telegram</p>
            </div>
            <div className="offical">
              <i style={{fontSize:"20px"}} className="bi-link"/>
              <p>Terms &amp; Conditions</p>
            </div>
            <div className="offical">
              <i style={{fontSize:"20px"}} className="bi-telephone-fill"/>
              <p>Help &amp; Contact Us</p>
            </div>
            <div className="offical">
              <i style={{fontSize:"20px"}} className="bi-share"/>
              <p>Invite Friends</p>
            </div>
            
            <button className="teams">Join Our Team</button><br/>
            <button className="scribe">Subscribe</button>
          
           </div>

    
   
        </div>
        <div className="ad-overlay" onClick={() =>setMenu(false)}></div>


      </>  
  )
}

export default Menu;