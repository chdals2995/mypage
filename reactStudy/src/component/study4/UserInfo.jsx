// UserInfo.jsx

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function UserInfo(){
    const [users, setUsers] = useState([]);
    const [all, setAll] = useState("");
    const [up, setUp] = useState(1);

    

    useEffect(
        () => {
            fetch("https://jsonplaceholder.typicode.com/users") // 제이슨으로 넘겨 줄 수 있는 주소(데이터)가 들어있어야 함
            .then( (response) => response.json() ) // 위의 값을 매개변수 respone에 받음(대문자x) res로 써야 함  json으로 변환
            .then( (data) => setUsers(data)); // 위의 값을 매개변수 data로 받음

        },[] // fetch로 데이터 받아올 때 빈 배열 무조건! > 안 하면 계속 무한으로 값 가져옴.
    );
    

    const userUp = users.filter(
        a => [a.name, a.email, a.company.name].join(" ")
            .includes(all)
    ).sort((a,b) => a.name.localeCompare(b.name)*up);


    // a.name.localeCompare(b.name) !== 0 ?
    // a.name.localeCompare(b.name) : a.email.localeCompare(b.email)

    if(userUp.length == 0)

        return (
            <>
                <Link to="/" className="home">HOME</Link>
                <div>저장된 데이터가 없습니다.</div>
            </>    
        );

    return(
        <>
            <Link to='/' className="home">HOME</Link>
            통합 검색 <input type="text" onChange={ (e) => setAll(e.target.value)}/>
            <ul>
                {
                userUp.map( (u) => (<li key={u.id}>{u.name}, {u.email}, {u.phone}, {u.company.name}</li>))
                
                }
            </ul>
            <button onClick={() => setUp(up *-1)}> {up == 1 ? "오름차순" : "내림차순"} </button>
        </>
    );
}