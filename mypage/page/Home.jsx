import React from "react";
import {Link, Outlet, Route, Routes} from "react-router-dom";
import HomeIndex from "./HomeIndex";
import About from "./About";
import Contact from "./Contact";

export default function Home(){
    return(
        <>
            <div className="menu">
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>
            </div>
            
            <Outlet/>

            {/* <Routes>
                <Route path="/" element={<HomeIndex/>}/>
                <Route path="/About" element={<About/>}/>
                <Route path="/Contact" element={<Contact/>}/>
            </Routes> */}
            
        </>
    );
}