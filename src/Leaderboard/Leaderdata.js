import React,{useState} from "react";
import {leaddata} from "../map/Ldata"

export default function LeaderData(){
    const [search,setSearch] = useState("")


    return(
        <div>
            <div className="search-icon">
            <i style={{fontSize:"20px",color:"black"}} className="bi-search"/>
            <input type="search"
                   className="search"
                   placeholder="Search your name..."
                   onChange={(e)=> setSearch(e.target.value)}
                   />
                   </div>
            {leaddata.length !==0 ? 
            <table>
             <thead>
             <tr>
                 <th style={{opacity:"0.5"}} className="rank">Players</th>
                 <th style={{opacity:"0.5"}}>Rank</th>
             </tr>
             </thead>
             <tbody>
     
  {leaddata.filter((item) => item.name.toLocaleLowerCase().includes(search)).map((item,index) =>(
                <tr>
                    <td className="tab-icon">
                        <div><i className="bi-person-circle" style={{fontSize:"25px",color:"gray"}}/></div>
                        {item.name}
                       <div className="won">{item.won}</div>
                        </td>
                        <td>{item.rank}</td>
                </tr>
                ))}
           
             </tbody>
         </table>
:  <div>
    <button>Leaderboard will be show after rssegistrtion ending</button>
    </div>}
        </div>
    )
}

