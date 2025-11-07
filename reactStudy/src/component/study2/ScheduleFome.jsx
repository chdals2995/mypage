// ScheduleFome.jsx
import React from "react";

export default function ScheduleFome({time, text, setTime , setText, onAdd}){
    // const change = (e) => {
    //     const {name, value} = e.target;

    // }

    return(
        <div style={{display:"grid", gap:"8", gridTemplateColumns:"140px 1fr auto"}}>
            <input type="time" value={time} onChange={ (e) => setTime(e.target.value)}/>
            <input type="text" value={text} onChange={ (e) => setText(e.target.value)} placeholder="내용 입력"/>
            <button onClick={onAdd}>등록</button>
        </div>
    );
}