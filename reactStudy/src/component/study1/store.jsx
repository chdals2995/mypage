// Store.jsx

import { Link,Routes,Route } from "react-router-dom";
import { useState } from "react";
import BuyItem from "./BuyItem"
import BuyList from "./BuyList"


export default function Store(){  //부모한테 지정한 값
    const [item, setItem] = useState({
        name: "",
        price: 0,
        brand:""
    });

    return(
        <>
            <Link to="/" className="home">HOME</Link>

            <h1>다있소 상점</h1>
            <Link to="/store/buy" style={{marginRight: 50}}>구매</Link>  {/* 앞에 /가 root를 의미함. 최상위 주소를 가리킴. */}
            <Link to="/store/list">내역</Link>

            {/* 구매, 내역 주소 라우팅 */}
            <Routes>
                <Route path="buy" element={<BuyItem item={item} setItem={setItem}/>}/> {/* 자식에게 어디에 어떻게 저장해야하는지 알려줘야 함 */}
                <Route path="list" element={<BuyList item={item}/>}/> {/* 데이터가 저장되어있는 item만 필요 */}
            </Routes>

        </>
    );
}

// 구매 클릭 시 > /store/buy
// 내역 클릭 시 > /store/list