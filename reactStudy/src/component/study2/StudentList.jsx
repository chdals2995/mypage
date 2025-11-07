export default function Student(props){
    return(
        <>
            <h3>학생명단</h3>
            <ul>
            {
            props.a.map(
                (name)=>( // 임시적인 변수
                    <li>{name}</li>
                )
            )
            }
            </ul>
        </>
    );
}