export default function ProductForm({thing,setThing,price,setPrice,onAdd}){
    return(
        <>
            <input type="text" value={thing}
            onChange={ (e) => setThing(e.target.value)}
            placeholder="상품명"/>
            <input type="number" value={price}
            onChange={ (e) => setPrice(e.target.value)} 
            placeholder="금액"/>
            <button onClick={onAdd}>등록</button>
        </>
    );
}