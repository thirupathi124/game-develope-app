import React from "react";
import "../styles/header.css";
import {Link} from "react-router-dom";


function Header() {
    return (
        <div>
            <div className="bottom">
                <Link to="/Footer">home</Link>
                <Link to="winner">Winner</Link>
                <h3>telegarm</h3>

            </div>
        </div>    
    );
}
export default Header;
