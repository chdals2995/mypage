// Attend.jsx
// MainMenu에 출석부, 주소는 / attend
// App에 path/ attend ,  element Attend

import { useState } from "react";
import { Link } from "react-router-dom";

export default function Attend(){
    const [people, setPeople] = useState([
        {id: 1, name: "주총민", className: "2반"},
        {id: 11, name: "조수아", className: "4반"},
        {id: 1111, name: "전서영", className: "3반"},
        {id: 111, name: "박승찬", className: "5반"},
        {id: 123, name: "이재영", className: "1반"},
        {id: 3, name: "강호현", className: "6반"},
        {id: 35, name: "이윤서", className: "3반"},
        {id: 4, name: "이예준", className: "2반"},
        {id: 7, name: "김정원", className: "6반"},
        {id: 8, name: "전계림", className: "5반"},
        {id: 86, name: "박종천", className: "3반"},
        {id: 54, name: "장석정", className: "4반"},
        {id: 5, name: "DW", className: "4반"},
        {id: 62, name: "아카데미", className: "2반"},
        {id: 43, name: "빼빼로", className: "1반"}
    ]);

    // 검색용 변수
    const [all, setAll] = useState(""); //검색은 문자열일테니 빈문자열 초기화

    // 정렬 변수
    const [turn, setTurn] = useState(true);

    // 필터
    const attendFilter = people.filter( p => p.name.includes(all))
        .sort((a,b) => turn ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));


    return(
        <>
            <Link to="/" className="home">HOME</Link>

            <h2>출석부</h2>
            상단 검색 입력 : <input type="text" onChange={(e) => setAll(e.target.value)}/>
            <button onClick={ () => setTurn(true)}>오름차순</button>
            <button onClick={ () => setTurn(false)}>내림차순</button>
            <ul>
                {
                    attendFilter.length == 0 ? <strong>검색 결과가 없습니다</strong> :
                    attendFilter.map(
                        (p) => (
                            <li key={p.id}>{p.name} : {p.className}</li>
                        )
                    )
                }
            </ul>
        </>
    );
}