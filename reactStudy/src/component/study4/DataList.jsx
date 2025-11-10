// DataList.jsx

import {Link} from 'react-router-dom'
import { useState } from 'react'

export default function DataList(){
    const names = [
        {id:1, name:"이순신"},
        {id:2, name: "강감찬"}, 
        {id:3, name:"이성계"}, 
        {id:100, name: "박문수"}, 
        {id:154, name:"문익점"}, 
        {id:7 , name:"최영"}
    ];  //키가 필요하니까 객체로 넣어주기

    // for( var n of names ){ // n 변수에 저장하고 
    //     `<div>${n}</div>` // 출력해라
    // }
    if(names.length == 0)
        return <div>저장된 데이터가 없습니다.</div>  // 값이 비어있는 경우도 해줄 것.

    return( 
        <>
            <ul>
                {/* names.map( () => ( ) )
                    names.map( () => { } ) 
                    map 함수는 배열을 순회 할 수 있는 함수이다.
                    map안의 화살표 함수에는 매개변수를 두어야 배열의 데이터 하나씩을 꺼내올 수 있다.
                */}
        
                { names.map( (n) => ( <li key={n.id}>{n.name}</li> )) }
            </ul>
        </>
    );
}


{/* names.map( () => ( ) ) 실행할 내용이 하나만 있어야 함.

    =>  예시  function a(){ //함수의 이름 임의로 a
                return 10;
            }
    =   화살표 함수로 바꾸면 : () => ( 10 );

    
    
    names.map( () => { } ) 실행할 함수가 여러 개일 때.

    =>  예시  function a(){
                let tot = 10+20+30+40;
                let result = tot < 50;
                return result;
            }
    =   화살표 함수로 바꾸면 : () => {
            let tot = 10+20+30+40;
            let result = tot < 50;
            return result;
        }
            */}