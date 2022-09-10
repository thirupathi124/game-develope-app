import React,{useState,useEffect} from "react"
import Home from "./pages/Home";


export default function Form(){

  const[show,setShow]= useState(false)
    
    const[data,setData] = useState([])
    const[user,setUser] = useState({
    name:"",
    number:""
  }) 

  function handleChange(e){
    const{name,value} = e.target
    setUser({
        ...user,
   
        [name] : value
    })
  } 
   
  function Submit(e){
    e.preventDefault();

    if(user){
    setData([
        ...data,
        {
            text:user
        }
    ]);
}
setUser({name:"",number:""})

}
localStorage.setItem("data",JSON.stringify(data))
console.log(localStorage.getItem("data"))


return(       
         <div>
          <h1>form</h1>
          <form onSubmit={Submit}>
          <input style={{padding:"10px",width:"70%"}} type="text"
                 placeholder="Name"
                 name="name"
                 value={user.name}
                 onChange={handleChange}
                 required
                 /><br/><br/>

          <input style={{padding:"10px",width:"70%"}} type="number"
                 placeholder="Number"
                 required 
                 name="number"
                 value={user.number}
                 onChange={handleChange}
                 
                 /><br/><br/>
         
          <button onClick={() => setShow(true)}  style={{padding:"10px",width:"70%"}}>Sing up</button>
         {show && <h3>Registraion sucesfly</h3>}
        </form>
    <table>
            <tr>
              <th>So.No</th>
              <th>name</th>
              <th>number</th>
              
            </tr>
            {data.map((item,index) => (
            
            
            <tr>
              <td>{index + 1}</td>
              <td>{item.text.name}</td>
              <td className="none">{item.text.number}</td>
            </tr>
       ))}

</table>
        <div>
      </div>
    </div>
    )
    
}
