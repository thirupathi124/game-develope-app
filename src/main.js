import React,{useState} from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Section from "./section/Header";
import Home from "./pages/Home";
import Sunday from "./pages/Sunday";
import Monday from "./pages/Monday";
import Theusday from "./pages/Theusday";
import Wed from "./pages/Wednesday";
import Thusday  from "./pages/Thusday";
import Friday from "./pages/Friday";
import Saterday from "./pages/Saterday"
import Leader from "./Leaderboard/LaderBoard";


function Main(){

    return(
        <div>
            <BrowserRouter>
            <Section/>
             <Routes>

                 <Route path="/game-develope-app" element={<Home/>}/>
                 <Route path="/Home" element={<Home/>}/>
                 <Route path="/Sunday" element={<Sunday />}/>
                 <Route path="/Monday" element={<Monday/>}/>
                 <Route path="/Theusday" element={<Theusday/>}/>
                 <Route path="/Wedday" element= {<Wed/>}/>
                 <Route path="/Thusday" element ={<Thusday/>}/>
                 <Route path="/Friday" element ={<Friday/>}/>
                 <Route path="/Saterday" element ={<Saterday/>}/>
                 <Route path="/Leader" element={<Leader/>}/>

             </Routes>
             </BrowserRouter>
        </div>
    )
}

export default Main;