import React from "react"
import "../styles/terms.css"
import Alert from "@mui/material/Alert"
import Step from "../imges/11.png"
import Step2 from "../imges/tor.png"
import Step3 from "../imges/winin.png"

function Play(){
    return(
        <div className="howplay">
            <div className="plystart">
           <h3>It's easy to start playing</h3>
           <h3 className="colr">on Easy11Money</h3>
           </div>
        
           <Alert>Play Fantasy on Easy 11 Money and win big</Alert>     
           <div className="gauid">
           <div className="step">
              <div>
              <p className="onestep">1</p>
              <h4 className="slec">Select Match</h4>
              </div>
              <img className="setpimg" src={Step} alt="logo"/>
           </div>
           <p className="choo">Choose an upcomeing match that you want to play</p>
           </div>
           <div className="gauid">
           <div className="step">
              <div>
              <p className="onestep">2</p>
              <h4 className="slec">Join Contest</h4>
              </div>
              <img className="setpimg" src={Step2} alt="logo"/>
           </div>
           <p className="choo">Simply join the contest and Complete</p>
           </div>
           <div className="gauid">
           <div className="step">
              <div>
              <p className="onestep">3</p>
              <h4 className="slec">Winnnings</h4>
              </div>
              <img className="setpimg" src={Step3} alt="logo"/>
           </div>
           <p className="choo">Check all Winnnings detail here and join contest</p>
           </div>
          {/* <video src="">jkk</video> */}
        </div>


    )
}

export default Play;