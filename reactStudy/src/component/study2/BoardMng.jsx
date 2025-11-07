import { useState } from "react";
import {Link,Routes, Route} from "react-router-dom";
import Write from "./Write";
import View from "./View";

export default function BoardMng(){
    const [board, setBoard] = useState({title:"",content:""});

    return(
        <>
            <Link to="/" className="home">HOME</Link>

            <Link to="/boardMng/write">글쓰기</Link>
            <Link to="/boardMng/view">글보기</Link>

            <Routes>
                <Route path="write" element={<Write board={board} setBoard={setBoard}/>}/> {/* board={board} 키 = 값*/}
                <Route path="view" element={<View board={board}/>}/>
            </Routes>
        </>
    );
}