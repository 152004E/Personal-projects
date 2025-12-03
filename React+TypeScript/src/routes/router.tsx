import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";
import { Modulo1Page } from "../Pages/Modulo1Page";

export function Myrutes(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/Modulo1" element={<Modulo1Page/>}/>
        </Routes>
        </BrowserRouter>
    )

}