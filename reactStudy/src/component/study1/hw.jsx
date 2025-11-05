// hw.jsx

import { Link,Routes,Route } from "react-router-dom";
import { useState } from "react";



export default function hw(){
    const[item, setItem] =useState({
        time:0,
        content:""
    });

    return(
        <>
            <Link to="/" className="home">HOME</Link>
            <Outlet/>

            
        </>
    );
}