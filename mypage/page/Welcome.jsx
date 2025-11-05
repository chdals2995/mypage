

export default function welcome(props){
    return (
        <>
            <h1>props 테스트</h1>
            <div>props 값 : {props.name}</div>
            <div>나이 : {props.age}</div>        
        </>
    );
}