// BoardView.jsx

export default function View(props){
    return(
        <>
            <div>
                <p> 제목 : {props.theTitle} </p>
                <p> 내용 : {props.theContent} </p>
                <p> 작성자 : {props.theWriter} </p>
                <p> 비밀번호 : {props.thePw} </p>
            </div>
        </>
    );
}