// TestFetch.jsx
import { useEffect, useState } from "react";


export default function TestFetch(){ // 패치는 비동기 동작으로 해야 함 = 외부 데이터 읽는 시간이랑 실행시간이 다르면 실패하기 때문에
    const [users, setUsers] = useState([]);
    useEffect(
        () => {
            fetch("https://jsonplaceholder.typicode.com/users") // 제이슨으로 넘겨 줄 수 있는 주소(데이터)가 들어있어야 함
            .then( (response) => response.json() ) // 위의 값을 매개변수 respone에 받음(대문자x) res로 써야 함  json으로 변환
            .then( (data) => setUsers(data)); // 위의 값을 매개변수 data로 받음

        },[]
    );
    return(
        <>
        <h2>데이터 출력</h2>
        <ul>
            {
                users.map( (u) => (
                    <li>{u.name} : {u.email}</li>
                )
                )
            }
        </ul>

        </>
    );
}