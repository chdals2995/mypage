//Member.jsx
import { Link } from "react-router-dom";
import { use, useState } from "react"; //useState는 부모한테 씀
import MemberInfo from "./MemberInfo";

export default function Member(){ //주소 : /member
    const [userId, setUserId] = useState("");
    const [age, setAge] = useState(1);

    return(
        <>
        <Link to="/" className="home">HOME</Link>

        아이디 <input type="text" onChange={ (e) => setUserId(e.target.value)}/>
        나이 <input type="number" onChange={ (e) => setAge(e.target.value)}/>
        <div style = { {width:"100px"} }/>

        <MemberInfo user= { {userId, age} }/>
        </>
    );
}