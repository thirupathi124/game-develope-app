import { red } from "@material-ui/core/colors";
import React,{useState} from "react";
import "./styles/header.css";
import {boxs} from "./memes";
import { click } from "@testing-library/user-event/dist/click";
import { generatePath } from "react-router-dom";


export default function Star(){
    const [gender,setgender] =useState({
        genders : ""
    })

    function handlechange(e){
        // const{name,value} = e.target
        setgender((prevState) =>(
           
            {
                ...prevState,
                [e.target.name] :e.target.value
            }
        ))
    }
    // console.log(gender)
    function mit(e){
       e.preventDefault()
       console.log(gender)
    }
    return(
        <div>
            <form onSubmit={mit}>
            <input type="radio"
                name="genders"
                id="data"
                value="male"
                onChange={handlechange}
             />
            <label htmlFor="data">Male</label>
            <input type="radio"
                name="genders"
                id="data"
                value="female"
                onChange={handlechange}
             />
            <label htmlFor="data">feMale</label>
            <input type="text"
                name="genders"
            
                value={gender.value}
                onChange={handlechange}
             />
            <p></p>
            <button type="submit">submit</button>
            </form>
        </div>
    )
}


















// export default function Star(pass){
//   const datas ={
//     firstname : " ",
//     lastname : "",
//     email :"",
//     friendly : "",
//     employment:""
    
//   }
 
 
//     const [data,setData] = useState(datas)
// //   console.log(data.friendly)
//     function handleClick(event){
//         const{name,value,type,checked} = event.target
//            setData((prevState) =>({
//             ...prevState,
//            [name]:  value
//            }
//            )) 
//     }
//     // console.log(data)
//  function submit(e){
//     e.preventDefault()
//     console.log(data)
//  }
// // console.log(data.friendly)

//     return(
//         <>

//         <form onSubmit={submit}>
           
//             <input name="firstname" value={data.firstname} type="text" onChange={handleClick}></input>
//             <input name="lastname" value={data.lastname} type="text" onChange={handleClick}></input>
//             <input name="email" value={data.email}type="email" onChange={handleClick}></input>
           
//             <input type="checkbox" 
//                    id="isFirendly"
//                    value="one"
//                    onChange={handleClick}
//                    name = "friendly"
//                    />
//             <label htmlFor="isFirendly">one</label>
//             <input type="checkbox" 
//                    id="isFirendly"
//                    value="two"
//                    onChange={handleClick}
//                    name = "friendly"
//                    />
//             <label htmlFor="isFirendly">two</label>


//             <input type="radio"
//                    id="unem"
//                    name="employment"
//                    value="unem"
//                    onChange={handleClick}
//             />
//          <label htmlFor="unem">unem</label>

//              <input type="radio"
//                    id="part time"
//                    name="employment"
//                    value="part-time"
//                    onChange={handleClick}
//             />
//                      <label htmlFor="part time">part time</label>

//              <input type="radio"
//                    id="full time"
//                    name="employment"
//                    value="fulltime value is find for inforamiton"
//                    onChange={handleClick}
//             />
//                      <label htmlFor="full time">full time</label>

//                      <h1>{data.email}</h1> 
//             <button type="submit">submit</button>

           
//           </form>
//         </>
        
//     )
// }