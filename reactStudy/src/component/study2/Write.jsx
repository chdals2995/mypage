

export default function Write({board,setBoard}){
    
    const onchange =(e)=> {
        const {name,value} = e.target; // e.target = 입력 이벤트가 발생한 input요소를 뜻함 name은 키 변수값, value는 사용자가 입력하는 문자열값
        setBoard( p => ({...p, [name]:value})); // board 상태를 업데이트 하는 함수
        /* setBoard(p=>({...p, title:e.target.value})) */
    }

    return(
        <>
            <input name="title" value={board.title} onChange={ onchange } placeholder="제목"/>
            <input name="content" value={board.content} onChange={ onchange } placeholder="내용 입력창"/>
        </>
    );
}