import React,{useState} from "react"
import "../styles/login.css"
import {Link} from "react-router-dom"
import Home from "../pages/Home";
import {database} from '../firebase'



function Login(){
    const[data,setData]= useState([])
  
  const[user,setUser] = useState({
    name:"",
    number:""
  })
  const name = user.name
const number = user.number  

console.log(data)   
function handleChange(e){
  const{name,value} = e.target
  setUser({
    ...user,
      [name] : value
    
  })
 
}
console.log(data)   
  function Submit(e){
    e.preventDefault();
    setData([
      ...data,
      {
        text:user
      }
    ])
    setUser({name:"",number:""})
   
    
    database.collection('userdata')
     .add({
            name:data,
            // number:number          
     })
     .then(()=>{
      alert("Submit Successfully")
     })
     .catch((error) =>{
      alert(error.message)
     });
    
}



    return(
        <div onSubmit={Submit} className="login">
            <div>
            <form>
            <div className="login-flex">
            <i  style={{color:"#1fb3f0",fontSize:"29px"}} className="bi-moon-stars-fill"></i>
            <p className="login-title">easy11mone<h2 className="y">y</h2></p>
            </div>
             <h4 className="welcome">Welcome Back</h4>
             <div className="tele">
              <i style={{fontSize:"20px"}} className="bi-telegram"/>
              <p className="join-tele">Join Telegram</p>
             </div>
             <p className="and">________AND________</p>
             <div className="user-data">
             <input className="name"
                    type="text" 
                    placeholder="Yourname"
                    value={user.name}
                    name="name"
                    onChange={handleChange}
                    required
                    /><br/>
             <input className="number" 
                    type="number" 
                    placeholder="Phonenumber"
                   required 
                   name="number"
                   value={user.number}
                   onChange={handleChange}
                    />
             </div>
             <Link to="/Home">
             <button  className="login-btn">Log In</button>
             </Link>
             </form>
            </div>
        </div>
    )
}

export default Login;