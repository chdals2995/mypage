export default function CartList2 ( {cart , onRemove} ){ //(props) > props.cart
    return(
        <>
            <h2>장바구니</h2>
            <ul style={{padding:0}}>
                {
                    cart.map( (item) => ( // 배열에 있는 값을 화면에 '이렇게' 출력할래! = map
                        <li key = {item.id} >
                            <strong>{item.name}-( { Number(item.price).toLocaleString() }원 )</strong> {/* toLocaleString은 금액에 3자릿수 마다 , 찍어주는 역할 */}
                            <button onClick={ () => onRemove(item.id) }>삭제</button>
                        </li>
                    ))
                }
            </ul>
            <p>총 갯수 : {cart.length}</p>
            <p>총 금액 : {cart.reduce( ( sum, i ) => sum + Number(i.price),0 ).toLocaleString()}원</p>

            {/* reduce는 배열의 모든 요소를 하나로 축약? 하는 함수
                총합을 구할 때 많이 사용 */}
        </>
    );
}