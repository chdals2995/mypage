// TodoList.jsx

import { Link } from "react-router-dom";
import { useState, useMemo } from "react";

export default function ToDoList(){
    const [todo, setTodo] = useState([
        {id: 0, text: "씻기", done:true },
        {id: 3, text: "짐챙기기", done: true},
        {id: 6, text: "점심 챙기기", done: true},
        {id: 1, text: "우체국 가기", done: true},
        {id: 2, text: "편지 쓰기", done: true},
        {id: 7, text: "스케줄러 정리", done: true},
        {id: 1110, text: "발레 가기", done: false},
        {id: 1111, text: "리액트 설치", done: false},
    ]);

    const [filter, setFilter] = useState('all');
    // all = 전체, active - 진행중, done - 완료

    // 남은 개수 구하기 함수
    const remaining = todo.filter(t =>!t.done).length;

    // filter 함수로 걸러주기 (전체, 진행중, 완료)
    const todoFilter = useMemo(() => {
        if(filter === "active") return todo.filter( t => !t.done);
        if(filter === "done") return todo.filter( t => t.done);
        return todo;
    },[todo, filter] );

    // 체크박스 클릭하면 체크되거나 해제되거나
    const toggle = ( id ) => {
        setTodo( todo.map( t => (t.id === id ? {...t, done : !t.done} : t))) //설명다시..해주세요.....
    };


    return(
        <>
        <Link to="/" className="home">HOME</Link>
        <div>
            <h2> 할 일 리스트 </h2>
            <div>
                <strong>남은 할 일: {remaining}개</strong>
            </div>

            <div>
                <button onClick={ () => setFilter("all")}>전체</button>
                <button onClick={ () => setFilter("active")}>진행중</button>
                <button onClick={ () => setFilter("done")}>완료</button>
            </div>

            <ul>
                {todoFilter.map(
                    (t) => (
                        <li>
                            <span>{t.text}</span>
                            <input type="checkbox" checked={t.done} onChange={ () => toggle(t.id)}/>
                        </li>
                    )
                )}
            </ul>
        </div>
        </>
    );
}