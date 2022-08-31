import React from "react"
import "../styles/winprice.css"
import {rankwin} from "../map/Winning"

export default function Winner(){
    return(
        <div >
            <table>
                <thead>
                <tr>
                    <th className="rank">Rank</th>
                    <th>Winnings</th>
                </tr>
                </thead>
                <tbody>
              {rankwin.map((item,index) =>(
                <tr>
                    <td>{item.rank}</td>
                    <td>{item.win}</td>
                </tr>
                ))}
              
                </tbody>
            </table>
        </div>
    )
}