import  React from "react";
import "../styles/home.css";
import {Link} from "react-router-dom";
import {tournamentData} from "../map/Homemap";

function Footer(){

    return(
     
     <div className="flex">
         <div className="top-navbar">
              <h3 className="top-title">easy11money</h3>
            </div> 
            <div className="second-color">

            </div>
         <div className="top">
            <h3 className="home-title">Weekly Tournament :</h3>
            <div className="flex">  
            {tournamentData.map((item,index) =>(
            <Link className="change" to="/winner">
          
            <div key={index} className="card-one">
                <div className="one-top">
                    <p className="ipl">{item.date}</p>
                    <ul>
                        <li className="red">{item.live}</li>
                    </ul>
                    <p>|||</p>
                </div>
                <h3 className="center-cont">{item.name}</h3>
                <div className="one-bottom">
                    <div className="left">
                        <p className="mega">MEGA</p>
                        <p className="price">{item.price}</p>
                    </div>
                    
                    <div>graduated</div>
                </div>
            </div>
            </Link>
            ))}
        </div>
             

            {/* <div className="card-one">
                <div className="one-top">
                    <p className="ipl">TATA IPL</p>
                    <p>|||</p>
                </div>
                <h3 className="center-cont">Moneday Blast</h3>
                <div className="one-bottom">
                    <div className="left">
                        <p className="mega">MEGA</p>
                        <p className="price">₹3 Laks</p>
                    </div>
                    <div>winer</div>
                    <div>|||</div>
                </div>
            </div>
            <div className="card-one">
                <div className="one-top">
                    <p className="ipl">TATA IPL</p>
                    <p>|||</p>
                </div>
                <h3 className="center-cont">Moneday Blast</h3>
                <div className="one-bottom">
                    <div className="left">
                        <p className="mega">MEGA</p>
                        <p className="price">₹3 Laks</p>
                    </div>
                    <div>winer</div>
                    <div>|||</div>
                </div>
            </div>
            <div className="card-one">
                <div className="one-top">
                    <p className="ipl">TATA IPL</p>
                    <p>|||</p>
                </div>
                <h3 className="center-cont">Moneday Blast</h3>
                <div className="one-bottom">
                    <div className="left">
                        <p className="mega">MEGA</p>
                        <p className="price">₹3 Laks</p>
                    </div>
                    <div>winer</div>
                    <div>|||</div>
                </div>
            </div>
            <div className="card-one">
                <div className="one-top">
                    <p className="ipl">TATA IPL</p>
                    <p>|||</p>
                </div>
                <h3 className="center-cont">Moneday Blast</h3>
                <div className="one-bottom">
                    <div className="left">
                        <p className="mega">MEGA</p>
                        <p className="price">₹3 Laks</p>
                    </div>
                    <div>winer</div>
                    <div>|||</div>
                </div>
            </div>
            <div className="card-one">
                <div className="one-top">
                    <p className="ipl">TATA IPL</p>
                    <p>|||</p>
                </div>
                <h3 className="center-cont">Moneday Blast</h3>
                <div className="one-bottom">
                    <div className="left">
                        <p className="mega">MEGA</p>
                        <p className="price">₹3 Laks</p>
                    </div>
                    <div>winer</div>
                    <div>|||</div>
                </div>
            </div> */}
           
         </div>
     </div>
    );
}
export default Footer;