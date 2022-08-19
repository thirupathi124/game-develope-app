import React from "react";
import "../styles/Winner.css";
import{sunday} from "../map/Homemap";
import {Link} from "react-router-dom";

function Sunday(){

    return(
        <div className="sunday-match">
            <div className="contest">
            <div className="contests">
               <Link className="back-arrow" to="/home">
                <i style={{fontSize:"25px"}} className="bi-arrow-left"/>
               </Link>
               <div className="sunday-gap">
                <p className="party">  -- sunday party --</p>
              
                </div>
                
                <div>
                <i style={{color:"gold",paddingLeft:"15px"}} className="bi-trophy-fill"/>
                <p style={{color:"gold"}}>₹10000</p>
                </div>
                
            </div>
            <p className="start">Registration Start 12am to 12pm</p>
            </div>
            <p className="only">Only one contest make win 99% chance</p> 
            <p className="sun-contest">Contest</p>
           
            {sunday.map((item,index) => (
            <div className="contest-card">
                <div className="contest-top">
                    <p>Price Pool</p>
                    
                        <p className="live">{item.live}</p>
                    
                    <p>Entry</p>
                </div>
                <div className="contest-prize">
                    <p className="pool">{item.totalprice}</p>
                    <button className="pay">{item.pay}</button>
                </div>
                <progress className="player-progress" value={item.value} max={100}></progress>
                <div className="players">
                    <p className="total-player">{item.spots}</p>
                    <p className="spots">{item.left}</p>
                 
                </div>
                <div className="contest-bottom">
                    <div className="first-price">
                    <p className="sunprice">{item.firstprice}</p>
                    
                    <i className="bi-trophy"/>
                    <p>{item.percentage}</p>
                    </div>
                    <div className="mark">
                    <i class="bi-check-circle-fill" style={{color:"green"}} role="img" aria-label="GitHub"></i>

                    <p>Garanteed</p>
                 </div>
                </div>
            </div>
            ))}
         </div>

    )
}

export default Sunday;