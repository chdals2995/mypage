// DataList2.jsx 필터, 검색

import { Link } from "react-router-dom";
import { useState } from "react";

export default function DataList2(){
    const member =[
        {id:56 , userId:"skyblue", age:45 , tel:"01012123333" },
        {id:1 , userId:"gold119", age:35 , tel:"01034456789" },
        {id:2 , userId:"kfteam1", age:23 , tel:"01023948576" },
        {id:5 , userId:"asdfg", age:38 , tel:"01012222222" },
        {id:8 , userId:"qwer112", age:15 , tel:"01054679876" },
        {id:15 , userId:"hahaha6", age:20 , tel:"01012345678" },
    ]
    const[age, setAge] = useState(0);
    const[userId, setUserId] = useState("");
    const[keyword, setKeyword] = useState("");

    // 첫페이지에서는 map출력2라고 출력,  주소는 /map2

    //const member2 = member.filter( u => u.age >= age ); // 값이 참인 것이 출력됨
    //const member3 = member.filter( u => u.userId.includes(userId) ); // includes 문자열 포함하는 값
    
    // 통합 검색은? 검색 대상들을 하나로 묶어
    const member4 = member.filter(
        u => [u.userId, u.age, u.tel].join(" ") // 데이터를 하나로 합쳐주는 함수 join / 데이터 사이 값을 공백" "
            .includes( keyword )                // 문자열을 배열로 바꿔주는 split
    );

    return(
        <>
            <Link to='/' className="home">HOME</Link>

            나이 검색<input type="number" onChange={ (e) => setAge(e.target.value)}/>
            아이디 검색<input type="text" onChange={ (e) => setUserId(e.target.value)}/>
            검색<input type="text" onChange={ (e) => setKeyword(e.target.value)}/>
        
            <ul>
                {
                    member4.map( (m) => (
                        <li key={m.id} className="mb-4"> 아이디: {m.userId} , 전화번호 : {m.tel}</li>
                    )) //filer 방법

                    // member.map( (m) => {
                    // if( m.age >=30 )
                    // return <li key={m.id} className="mb-4"> 아이디: {m.userId} , 전화번호 : {m.tel}</li>
                    // })  // if문 방법
                }
            </ul>
        </>
    );
}

// 배열에 특정 조건 주는 방법 2가지 
// if, filter 