import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import ProductForm from "./ProductForm";
import CartList from "./CartList";

export default function Buyer(){
    // const [items, setItems] = useState({
    //     name:"",
    //     price:0,
    // });  이거 하면 안 되나??
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);

    const [things, setThings] = useState([]); //배열 만들기

    const addThing = () => {
        if(!name || !price) return;

        const newThing = {id:name.trim(),name,price};
        setThings( p => [...p, newThing]);
        
        setName(""); setPrice("");
    }

    
    
    const deleteThing = (id) => {

        setThings((e) => e.filter((del)=>del.id!==id))
    }

    return(
        <>
            <Link to="/" className="home">HOME</Link>

            <h3>내 장바구니를 봐라</h3>
            <Link to="/buyer/add" style={{marginRight:20}}>상품 등록</Link>
            <Link to="/buyer/cart">장바구니</Link>

            <Routes>
                <Route path='add' 
                element={
                <ProductForm 
                thing={name} 
                setThing={setName} 
                price={price} 
                setPrice={setPrice}
                onAdd = {addThing}/>}/>
                <Route path='cart' element={<CartList items={things}
                deleteThing={deleteThing}/>}/>
            </Routes>
            
        </>
    );
}