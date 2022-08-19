import  React,{useState} from "react";
import "../styles/home.css";
import {Link} from "react-router-dom";
import {tournamentData} from "../map/Homemap";
import {Carousel}  from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Menu from "../section/Menu";

function Footer(){
    const[menu, setMenu] = useState(false)
 return(
    <div className={`flex ${menu && "show-create-menu"}`}>
           <div className="top-component">
         <div className="top-navbar">
           
            <div className="me">
              <i style={{color:"white",fontSize:"30px"}} className="menu" class="bi-list"  onClick={() => setMenu(true)} alt="menu"/>
              <div className="trophy">
            
              <h3 className="top-title">easy11money</h3>
              <i className="bi-trophy-fill" style={{color:"white",fontSize:"20px",paddingBottom:"5px"}}/>


              </div>
              <i style={{color:"white",fontSize:"30px"}} class="bi-telegram" />

             </div>
            
            </div>
            </div>
           
            <div className="second-color">
            <Carousel>  
                    <div className="slide-one">
                    
                    </div>
                    <div className="slide-two">
                 
                    </div>
                    <div className="slide-three">
                   
                    </div>
            </Carousel>   
            </div>
          
           
         <div className="top">
         
            <p className="home-title">Weekly Tournament :</p>
            <div className="flex">  
            {tournamentData.map((item,index) =>(
            <Link className="change" to= {`${item.link}`}>
          
            <div key={index} className="card-one">
                <div className="one-top">
                <div>
                <i className="bi-calendar-check-fill" style={{color:"black",fontSize:"20px",paddingBottom:"5px"}}/>
                <span className="date">{item.date}</span>
                 </div>   
                    <div className="alarm">
                        <i className="bi-alarm-fill" />
                        <li>{item.live}</li>
                    </div>
                    <p>{item.time}</p>
                </div>
                <div className="starting">
                <p className="center-cont">{item.name}</p>
                <p className="red">Upcomeing</p>                
              
                </div>
                <div className="one-bottom">
                    <div className="left">
                        <button className="mega">MEGA</button>
                        <p className="price">{item.price}</p>
                    </div>
                    <div className="icons-mark">                   
                        <i class="bi-check-circle-fill" style={{color:"green"}} role="img" aria-label="GitHub"></i>

                    <div>Graduated</div>
                    </div>
                </div>
            </div>
            </Link>
            ))}
        </div>
       </div>
       <Menu setMenu =  {setMenu}/>

     </div>
    );
}
export default Footer;