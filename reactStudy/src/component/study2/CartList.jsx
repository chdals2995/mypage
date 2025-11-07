export default function CartList({items,deleteThing}){
    if(items.length === 0)
        return <p>담아둔 항목이 없습니다.</p>;
    return(
        <>
            <ul>
                {
                    items.map(
                        ({id, name, price}) => (
                            <li key={id}>{name}-{price}
                                <button onClick={() => deleteThing(id)}>삭제</button>
                            </li>
                        )
                    )
                    
                }
            </ul>
            <div>
                총 : {items.length}
            </div>
            
        </>
    );
}