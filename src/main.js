import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Section from "./section/Header";
import Footer from "./pages/Home";
import Wins from "./pages/win";

function Main(){
    return(
        <div>
            <BrowserRouter>
            <Section/>
             <Routes>
                 <Route path="/" element={<Footer/>}/>
                 <Route path="/Footer" element={<Footer/>}/>
                 <Route path="/winner" element={<Wins/>}/>
             </Routes>
             </BrowserRouter>
        </div>
    )
}

export default Main;