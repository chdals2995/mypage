import { useState } from "react";

export default function Like(){
    const[count, setCount] = useState(0);

    return(
        <>
            <button onClick={ (e) => setCount(count + 1) }>좋아요♥</button>ㅊ
            <p>좋아요♥{count}</p>
        </>
    );
}