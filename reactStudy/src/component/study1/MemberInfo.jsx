// MemberInfo.jsx

export default function MemberInfo( {user : {userId , age} }){ //props 데이터 받는 역할 = 자식

    return(
        <>
            아이디 : {userId} <br/>
            나이 : {age}
        </>
    );
}