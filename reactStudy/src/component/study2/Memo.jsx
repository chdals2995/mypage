import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Memo(){
    const [memoText, setMemoText] = useState("");

    return(
        <>
            <Link to="/" className="home">HOME</Link>
            입력
                <input type='text' onChange={(e)=>setMemoText(e.target.value)}/><br/>
            출력
            <p>작성중인 메모: {memoText}</p>
        </>
    );
}