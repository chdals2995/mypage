

export default function Profile(props){
    
    return(
        <>
            <p>안녕하세요, 저는 {props.name}입니다.</p>
            <p>나이는 {props.age}살이고, 취미는 {props.hobby}입니다.</p>
        </>
    );
}