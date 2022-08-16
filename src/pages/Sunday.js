import React from "react";
import "../styles/Winner.css";
import{sunday} from "../map/Homemap";


function Sunday(){

    return(
        <div className="sunday-match">
            <div className="contest">
               <div>
                <p>|||</p>
               </div>
               <div className="sunday-gap">
                <h3 className="party">Sunday Party</h3>
                <p>registration start 12 am to 4pm</p>
                </div>
                <div>
                <p>(1st)</p>
                <h4>₹10000</h4>
                </div>
            </div> 
            <h2 className="sun-contest">contest</h2>
            {sunday.map((item,index) => (
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
            ))}
         </div>

    )
}

export default Sunday;