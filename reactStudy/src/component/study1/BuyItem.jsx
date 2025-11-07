// BuyItem.jsx

export default function BuyItem({item,setItem}){

    const onchange = (e) => {//input 태그의 onChange 이벤트 발생 시 실행할 함수
        const {name,value} = e.target;
        setItem(p => ({...p, [name]:value}));  /* ...p는 현재 배열. 여기에 [name]:value}을 추가하겠다는 뜻 */
    }

    return(
        <>
            <h3>구매 상품 입력</h3>
            <input name="name" value={item.name} onChange={onchange} placeholder="상품명 입력"/><br/>
            <input name="price" value={item.price} onChange={onchange} placeholder="상품 금액 입력"/><br/>
            <input name="brand" value={item.brand} onChange={onchange} placeholder="브랜드명 입력"/>
        </>
    );
}