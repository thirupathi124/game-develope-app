import React from "react"
import "../styles/terms.css"


function Amount(){
   const array = [
    {
        id:1,
        name:"thiru"
    },
    {
        id:2,
        name:"pathi"
    },
    {
        id:3,
        name:"roman"
    },
    {
        id:4,
        name:"reings"
    },
    {
        id:5,
        name:"mom"
    },
    {
        id:6,
        name:"brock"
    },
   ]


    return(
        <div>
            <h4 className="draw"> Withdraw Amount</h4>
            <p className="stepone">Step 1</p>

            {/* {shuffledArray.map((item) =>(
                <div>

                    <h1>{item.id} {item.name}</h1>
                </div>
            ))} */}
        </div>
    )
}

export default Amount;