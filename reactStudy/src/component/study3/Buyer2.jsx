import { Link, Routes, Route } from "react-router-dom";
import { useState } from "react";
import ProductForm2 from "./productForm2";
import CartList2 from "./CartList2";


export default function Buyer2(){
    const [cart, setCart] = useState([]); // 배열로 만들어주면 자식한테 최종값만 넘겨줄 수 있다. 
    // 데이터에 저장, 변경, 삭제 등의 동작하는 건 cart를 건드리지 말고 setCart를 이용. set은 저장하는 함수.
    
    const addCart = (item) => {  // cart 저장하는 함수
        setCart( (p) => [...p, {id:Date.now(),...item}]); // item을 배열의 형태로 담아줌. 
    };

    const removeCart = (id) => { // 배열의 값을 제거하는 방법 중에 하나 filter - 특정 기준으로 추리는 것
        setCart( (p) => p.filter((i) => i.id !== id)); // 여기서 p는 cart를 가리킴
    };

    return(
        <>
        <Link to="/" className="home">HOME</Link>

        <h2>계림핑</h2>
        <Link to='/productBuy/add'>입력</Link>
        <Link to='/productBuy/cart'>목록</Link>

        <Routes>
            <Route path="add" element={
                <ProductForm2 onAdd={addCart}/>
                }
            />
            <Route path="cart" element={
                <CartList2 cart={cart} onRemove={removeCart}/>
                }
            />
        </Routes>
        
        </>
    );

}

