// ProductForm2.jsx

import { useState } from "react";

export default function ProductForm2({onAdd}){ //( props) > props.onAdd
    const [name, setName] = useState("");
    const [price ,setPrice] = useState(0);

    const submit = (e) => {
        e.preventDefault(); //새로고침 방지 - 새로고침 되면 name, price 값이 사라짐
        
        if ( !name.trim() || !price) return; //상품명과 가격이 입력되지 않았다면 실행 ㄴㄴ
        
        onAdd( { name : name.trim(), price : price } ); 
        // input태그에서 입력한 걸 객체로, 자리 표현해서 묶어줌. > item에 보내짐. 
        // 왜 객체로 하냐? 배열로 하면 어떤 자리에 어떤 값? 헷갈리니까.
        // 2개 이상의 값은 묶어주는 게 좋다.
        
        setName("");
        setPrice(0);
    };
    return(
        <>
        <form onSubmit={submit}> {/* 역할: 데이터 전달 */}
            <input type="text" placeholder="상품명" onChange={(e)=>setName(e.target.value)} value={name}/>
            <input type="number" placeholder="상품가격" onChange={(e)=>setPrice(e.target.value)} value={price}/>
            <button>장바구니</button> {/* 버튼은 기본적으로 form태그에 submit을 동작시키는 걸 가지고 있음 */}
        </form>
        </>
    );
}