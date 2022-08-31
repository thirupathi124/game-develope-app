import React,{useState} from "react";
import {leaddata} from "../map/Ldata"

export default function LeaderData(){
    const [search,setSearch] = useState("")


    return(
        <div>
            <div className="search-icon">
            <i style={{fontSize:"20px",color:"white"}} className="bi-search"/>
            <input type="search"
                   className="search"
                   placeholder="Search your name..."
                   onChange={(e)=> setSearch(e.target.value)}
                   />
                   </div>
            <p className="player">All players(23,24,4333)</p>
            {leaddata.length !==0 ? 
            <table>
                
                <thead>
                <tr>
                    <th >Name</th>
                    
                </tr>
                </thead>
                <tbody>

              {leaddata.filter((item) => item.name.toLocaleLowerCase().includes(search)).map((item,index) =>(
                <tr>
                    <td>{item.name}</td>
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