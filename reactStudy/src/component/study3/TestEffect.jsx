// TestEffect.jsx
import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react';


function TestEffect(){
    const [count, setCount] = useState(0);
    // useEffect(
    //     () => {
    //         //document.body.style.backgroundColor="skyblue"; // 컴포넌트가 연결될 때
    //         // document.title=`카운트:${count}`;

    //         // return () => {
    //         //     document.body.style.background="white"; // 컴포넌트가 해제될 때
    //         // }
    //         if( count >= 5 )
    //             document.body.style.background = "purple"
    //         else
    //             document.body.style.background = "gray"
    //     }, [count] // 변화를 감지해줄 변수 이름. 어떤 변수가 변할 거냐
    // );

    const [showModal, setShowModal] = useState(false);

    useEffect( //컴포넌트 렌더링 될 때 모달창 띄우기
        () => {setShowModal(true);}
    ,[]); // 빈 배열을 줘야 처음 한번만 실행함.

    return(
        <>
            <Link to="/" className='home bg'>HOME</Link>
            {/* <input type='text'/>
            <button onClick={ (e) => setCount( count+1 )}>증가{count}</button> */}
            {
                showModal && (
                    <Modal onClose={ () => setShowModal(false) }/>
                )
            }
        </>
    );
}

function Modal( {onClose} ){
    return(
        <div className='fixed bg-black/50 flex justify-center items-center'>
            <div className='bg-white px-10 py5 rounded-lg shadow-1g text-center'>
                <h2 className='text-xl mb-4'>모달창이지</h2>
                <p className='text-gray-500 mb-4'>
                    모달창은 컴포넌트가 처음 연결될 때 나옵니다.
                    모달창 만들면 유용한 점도 있으니 참고하세요.
                    알았죠? 알았으면 대답 좀.....
                </p>
                <button onClick={onClose} className='bg-pink-200 hover:bg-lime-100 text-white px-4 py-2 rounded-md'>닫기</button>
            </div>


        </div>
    );
}

export default TestEffect;