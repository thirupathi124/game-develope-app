import React from "react";
import "../styles/header.css";
import {Link} from "react-router-dom";


function Header() {
    return (
        <div>
            <div className="bottom">
                <Link to="/Home">home</Link>
                <Link to="/winner">Winner</Link>
                <Link to="/mems">telegarm</Link>

            </div>
        </div>    
    );
}
export default Header;
