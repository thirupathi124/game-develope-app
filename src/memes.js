import { click } from "@testing-library/user-event/dist/click";
import React, { useState } from "react";
import "./allstyle.css";
import Img from "./imges/1.png";
import Imgone from "./imges/5.png";
import Imgtwo from "./imges/3.png";
import Imgthree from "./imges/4.png";
import Star from "./Star";


const memes = [
    {
        img : Img,
    },
    {
        img : Imgone,
    },
    {
        img : Imgtwo,
    },
    {
        img : Imgthree,
    },
    
]
export const boxs = [
    {
        id : 1,
        on :false
    },
    {
        id : 2,
        on :false
    },
    {
        id : 3,
        on :true
    },
    {
        id : 4,
        on :true
    },
]
// const data = ["nae","age","sex"]
// const arr= ["one","two"]


function Mems(){
//  const[meme,setMeme] = useState();
 const[getMeme, setGetMeme] = useState({
    toptext : "",
    bottomtext : "",
    randomimg : Img,
 })

//  const [thing,setThing] = useState(data)
//  const  [ news,setNews ] = useState([arr]) 
 const [string, setString] = useState({
    name : "age",
    age : "33",
    boolean :false
 })

//  let work = string.boolean ? "star" : "noStar"
function star(){
   setString((prevState) => (
    {
        ...prevState,
        boolean :!prevState.boolean
    }
   ))


}
// function show(){
//     setNews(arrs => 
//       [...arrs,`Thing ${arrs.length + 1}`]
//   )
// }    
  function click(){
        const Array = memes;
        const random = Math.floor(Math.random() * Array.length)
        const stow = Array[random].img
       setGetMeme((prevState) =>(
        {
            ...prevState,
            randomimg : stow
                
        }
       ))
        
      }
  
    


    return(
      <div>
         <h1>name:{string.name}</h1>
        <h3>age:{string.age}</h3>
        {/* <p onClick={star}>{work}</p> */}
        <Star isFilled={string.boolean} event ={star}  darkMode = {boxs.on}/>
{/* 
        <button>additem</button>
        <h1>{thing}</h1>
        {news.map((item) =>(
         <h1>{item}</h1>
         ))}
         <button onClick={show}>additem</button>  */}
        <ul>
            <li>Event Listners</li>
            <li>State</li>
            <li>Conditional rendering</li>
            <li>Forms</li>
            <li>Side Effects</li>
        </ul>

        




      <div className="sha">
       <div className="mems">
        <div className="flexs">
         <h1>|||</h1>
         <h2>Meme Generator</h2>   
        </div>
        <div>
            <h4>React Course - Proect-3</h4>
        </div>
        </div>
        <input type="text" placeholder="put your cmd"/>
        <input type="text" placeholder="put your cmd"/>
       <br/><button onClick={click} className="btn-meme">Get new meme image</button>
      <img src={getMeme.randomimg} alt="logo"/>
       
       </div>
      </div>
    )
}

export default Mems;