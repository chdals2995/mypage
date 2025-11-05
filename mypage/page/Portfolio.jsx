import React from "react";
import { Link } from "react-router-dom";
import choco from "../img/choco.jpg";
import Ritz from "../img/Ritz.jpg";
import onion from "../img/onion.jpg";
import cheeze from "../img/cheeze.jpg";
import white from "../img/white.jpg";

export default function Portfolio(){
    return(
        <>
            <Link to="/">HOME</Link>
            <div className="images">
                <img src={choco}/>
                <img src={Ritz}/>
                <img src={onion}/>
                <img src={cheeze}/>
                <img src={white}/>
            </div>
        </>
    );
}