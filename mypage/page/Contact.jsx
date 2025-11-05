import React, { useState } from "react"; // useState 사용을 위해선 import 필요. 모든 컴포넌트에 사용가능
                                        

export default function Contact(){
    const[name, setName] = useState(""); // input 태그의 값을 저장하기 위한 변수. "" 빈 문자열 저장 (초기화 상태로 만들어줌)
                            //setName의 역할은 name이란 변수에 데이터를 저장하기 위한 것.
                            //useState 는 저장소. 변화를 감시, 감지해서 적용시키는 역할.
                            //props는 값만 받을 뿐 변화 적용 못함.

    return(
        <>
            <p>리츠 연락처: 080-023-9114</p>
            <p>리츠 이메일: chocoflavor9114@dongseo.co.kr</p>
            <p>리츠 깃 주소: chocoflavor9114.co.kr</p>
            <input type="text" onChange={ (e) => setName(e.target.value) }/> {/* e는 input을 가져옴. e.target.value가 가진 값이 name에 저장됨 */}

            <p>당신의 이름은? {name}</p> {/* name 출력 */}
        </>
    );
}