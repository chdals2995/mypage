import React from "react";
import { useNavigate } from "react-router-dom";
import a from "../img/a.gif";

export default function HomeIndex(){
const navigate = useNavigate();

    return(
        <div>
            <button onClick={ () => navigate("/Portfolio")}>포트폴리오</button>
            <img src={a}></img>
        </div>
    );
}