// Board.jsx
import { Link } from "react-router-dom";
import { useState } from "react";
import BoardView from "./BoardView"


//문제. 게시글 작성 만들기 - 제목, 내용, 작성자, 비밀번호 입력하고 화면출력까지
// 화면 출력 컴포넌트 명 : BoardView.jsx
export default function Board(){
    const[title, setTitle] = useState("");
    const[content, setContent] = useState("");
    const[writer, setWriter] = useState("");
    const[pw, setPw] = useState("");

    return(
        <>
            <Link to="/" className="home">HOME</Link>

            <div>
                제목 : <input type="text" onChange={ (e) => setTitle(e.target.value) }/><br/>
                내용 : <textarea onChange={ (e) => setContent(e.target.value) }/><br/>
                작성자 : <input type="text" onChange={ (e) => setWriter(e.target.value) }/><br/>
                비밀번호 : <input type="password" onChange={ (e) => setPw(e.target.value) }/>
            </div>

            <BoardView theTitle={title} theContent={content} theWriter={writer} thePw={pw} />
        </>
    );
}