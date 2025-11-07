export default function View(props){

    return(
        <>
            <p>제목 : {props.board.title}</p>
            <p>내용 : {props.board.content}</p>
        </>
    );
}