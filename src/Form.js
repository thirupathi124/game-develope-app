// import React,{useState,useEffect} from "react"
// import {database} from './firebase'



// export default function Form(){

//   const[data,setData]= useState([])
  
//   const[user,setUser] = useState({
//     name:"",
//     number:""
//   })
// function handleChange(e){
//   const{name,value} = e.target
//   setUser({
//     ...user,
//       [name] : value
    
//   })
// }
// console.log(data)   
//   function Submit(e){
//     e.preventDefault();
//     setData([
//       ...data,
//       {
//         text:user
//       }
//     ])
//     setUser({name:"",number:""})

//      database.collection('userdata')
//      .add({
//             name:data,
//             // number:number          
//      })
//      .then(()=>{
//       alert("Submit Successfully")
//      })
//      .catch((error) =>{
//       alert(error.message)
//      });
    
// }





// return(       
//          <div>
//           <h1>form</h1>
//           <form onSubmit={Submit}>
//           <input style={{padding:"10px",width:"70%"}} type="text"
//                  placeholder="Name"
//                  value={user.name}
//                  name="name"
//                  onChange={handleChange}
//                  required
//                  /><br/><br/>

//           <input style={{padding:"10px",width:"70%"}} type="number"
//                  placeholder="Number"
//                  required 
//                  name="number"
//                  value={user.number}
//                  onChange={handleChange}
                 
//                  /><br/><br/>
         
//           <button  style={{padding:"10px",width:"70%"}}>Sing up</button>
//         </form>
//     <table>
//             <tr>
//               <th>So.No</th>
//               <th>name</th>
//               <th>number</th>
              
//             </tr>
//             {data.map((item,index) => (
            
            
//             <tr>
//               <td>{index + 1}</td>
//               <td>{item.text.name}</td>
//               <td className="none">{item.text.number}</td>
//             </tr>
//        ))}
//      </table>
//         <div>
//       </div>
//     </div>
//     )
    
// }
