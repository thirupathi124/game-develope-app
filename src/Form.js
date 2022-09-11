import React,{useState,useEffect} from "react"
import {database} from './firebase'



export default function Form(){

  const[show,setShow]= useState(false)
    
    const[name,setName] = useState("")
    const[number,setNumber] = useState("")


   
  function Submit(e){
    e.preventDefault();

     database.collection('userdata')
     .add({
            name:name,
            number:number          
     })
     .then(()=>{
      alert("Join Successfully")
     })
     .catch((error) =>{
      alert(error.message)
     });
     setName("")
     setNumber("")
   
}
console.log(name)
console.log(number)





return(       
         <div>
          <h1>form</h1>
          <form onSubmit={Submit}>
          <input style={{padding:"10px",width:"70%"}} type="text"
                 placeholder="Name"
                 value={name}
                 onChange={(e) => setName(e.target.value)}
                 required
                 /><br/><br/>

          <input style={{padding:"10px",width:"70%"}} type="number"
                 placeholder="Number"
                 required 
                 value={number}
                 onChange={(e) => setNumber(e.target.value)}
                 
                 /><br/><br/>
         
          <button  style={{padding:"10px",width:"70%"}}>Sing up</button>
         {show && <h3>Registraion sucesfly</h3>}
        </form>
    {/* <table>
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

</table> */}
        <div>
      </div>
    </div>
    )
    
}
