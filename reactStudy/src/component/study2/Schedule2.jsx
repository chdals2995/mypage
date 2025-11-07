// Schedule2.jsx

import {useState} from "react"
import { Link } from "react-router-dom";
import ScheduleFome from "./ScheduleFome";
import ScheduleList from "./ScheduleList";

export default function Schedule2(){
    const [time, setTime] = useState();
    const [text, setText] = useState();
    // const [item, setItem] = useState({
    //     time: "",
    //     text: "",
    // });
    const[ items , setItems ] = useState([]);

    const addItem = () => { // 입력한 시간과 내용을 items 배열에 저장 시키기
        if(!time || !text.trim()) return; //아무때나 등록버튼 클릭한다고 저장 시키면 안 되지!!
                                            // time, text 값이 없으면 저장 안 시키겠다. = 방어적 코드 (입력 값이 있을 때만 동작하도록)
        const newItem = {id:Date.now(), time, text: text.trim()}; // trim: 여백 제거
        setItems( p => [...p, newItem].sort((a,b) => a.time.localeCompare(b.time)));
        //set 붙이는 게 규칙. p라는 배열에 newItem추가 하겠다
        // 문자열끼리 비교면 sort()여도 가능 하지만 지금 숫자도 있으니까 뭐를 비교할 건지 함수를 써줘야 해
        // a,b 는 변수 예) 0번 인덱스, 1번 인덱스 자리 = 옆자리끼리 값 비교(버블정렬?) 를 뜻함
        
        setTime(""); setText(""); //안전을 위해 초기화
    };

    return(
        <div style={ {width:520, margin:"50px auto"} }>
            <Link to="/" className="home">HOME</Link>

            <h2>하루일과</h2>
            <ScheduleFome 
            time={time} 
            setTime={setTime} 
            text={text} 
            setText={setText} 
            onAdd = {addItem}/>
            <div style={ {marginTop:50} }>
                <ScheduleList items={items}/>
            </div>
        </div>
    );
}