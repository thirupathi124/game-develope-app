import React from "react";
import "../styles/Winner.css"
import Logo from "../imges/card.jpg";
import {data} from "../map/Homemap";

function winner(){
    return(
        <div className="fle">
            {data.map((item,index)=>(
             <div key={index} className="card">
                <img className="imgs" src={Logo} alt="logo"/>
                <h3>5 Star Ratting</h3>
                <h5>lorem Text comesup</h5>
                <h6>Price ₹1200/-</h6>
             </div>
             ))}
           <h2>Today time is {Date()}</h2>
        </div>

    )
}
export default winner;