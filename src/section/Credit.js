import React from "react"
import "../styles/winprice.css";
import Alert from "@mui/material/Alert"

function Withdraw({deposit}){
    return(
      <div>
      <div className="deposit">
      <div className="withdrawform">
       {/* <h4>Withdraw</h4> */}
       <Alert className="veri">Provide correct details</Alert>
       <input className="rank-data" type="text" placeholder="name"/><br/>
       <input className="rank-data" type="number" placeholder="Login Phonenumber"/><br/>
       <Alert className="verify">Enter Googlepay, Phonepe,Paytm Number</Alert>
       <input className="rank-data" type="number" placeholder="Enter your Rank"/><br/>
       <input className="rank-data" type="number" placeholder="withdraw number"/>
       <button onClick={() => alert("Amount Credit 24 hour")} className="with-btn">withdarw</button>
       </div>


      </div>
       <div onClick={()=> deposit(false)} className="overlay"></div>
     </div>
    )
}

export default Withdraw;