import React from "react";
import "../styles/menu.css";

function Menu({setMenu}){
    return(
        <>
        <div className="create-ad">
          <div className="menu-top">
            <p className="menu-title">easy11money</p>
          </div>
          <p className="boot">be Carefull to paly this game</p>

        </div>
        <div className="ad-overlay" onClick={() =>setMenu(false)}></div>
        </>
                  )
}

export default Menu;