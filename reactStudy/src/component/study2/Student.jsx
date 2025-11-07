import { useState } from "react";
import { Link } from "react-router-dom";
import StudentList from "./StudentList";

export default function Student(){
    const name = ["이순신", "어쩌구", "저쩌구"];

    return(
        <>
        <Link to= "/" className="home">HOME</Link>
        <StudentList a = {name}/>
        </>
    );
}