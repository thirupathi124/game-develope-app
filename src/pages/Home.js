import  React from "react";
import "../styles/home.css";
import {Link} from "react-router-dom";
import {tournamentData} from "../map/Homemap";
import {Carousel}  from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Footer(){

 return(
     
     <div className="flex">
         <div className="top-navbar">
              <h3 className="top-title">easy11money</h3>
            </div>
           
            <div className="second-color">
            <Carousel>  
                    <div className="slide-one">
                     Sunday Party
                    </div>
                    <div className="slide-two">
                     ghgfdgdfs
                    </div>
                    <div className="slide-three">
                     ghgfdgdfs
                    </div>
            </Carousel>   
            </div>
            <div className="des">
              
            </div>
           
         <div className="top">
         
            <h3 className="home-title">Weekly Tournament :</h3>
            <div className="flex">  
            {tournamentData.map((item,index) =>(
            <Link className="change" to= {`${item.link}`}>
          
            <div key={index} className="card-one">
                <div className="one-top">
                    <p className="date">{item.date}</p>
                    <ul>
                        <li className="red">{item.live}</li>
                    </ul>
                    <p>{item.time}</p>
                </div>
                <h3 className="center-cont">{item.name}</h3>
                <div className="one-bottom">
                    <div className="left">
                        <button className="mega">MEGA</button>
                        <p className="price">{item.price}</p>
                    </div>
                    
                    <div>graduated</div>
                </div>
            </div>
            </Link>
            ))}
        </div>
             

           
         </div>
     </div>
    );
}
export default Footer;