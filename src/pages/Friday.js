import React from "react";
import "../styles/Winner.css";
import{friday} from "../map/Homemap";
import {Link} from "react-router-dom";


function Friday(){
 
    return(
        <>
        {friday.map((item,index) => (
        <div className="sunday-match">
           
            <div className="contest">
               <div>
                <Link to="/Home">|||</Link>
               </div>
               
               <div className="sunday-gap">
                <h3 className="party">{item.title}</h3>
                <p>registration start {item.time}</p>
                </div>
                <div>
                <p>(1st)</p>
                <h4>{item.price}</h4>
                </div>
            </div>
           
            <h2 className="sun-contest">contest</h2>
 
            <div className="contest-card">
                <div className="contest-top">
                    <p>Price Pool</p>
                    
                        <h4 className="live">{item.live}</h4>
                    
                    <p>Entry</p>
                </div>
                <div className="contest-prize">
                    <h4>{item.totalprice}</h4>
                    <button className="pay">{item.pay}</button>
                </div>
                <progress className="player-progress" value={item.value} max={100}></progress>
                <div className="players">
                    <h3 className="total-player">{item.spots}</h3>
                    <h3 className="spots">{item.left}</h3>
                 
                </div>
                <div className="contest-bottom">
                    <div className="first-price">
                    <h4>{item.firstprice}</h4>
                    <h4>{item.percentage}</h4>
                    </div>
                    <h4>Garanteed</h4>
                </div>
        
            </div>
            
           
         </div>
         
         ))}
      </>

    )
}

export default Friday;