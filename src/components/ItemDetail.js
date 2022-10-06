import { useState } from "react";
import Item from "./ItemListc/Item";

const ItemDetail = ({ bebidas }) => {
    const [count, setCount] = useState(0);

const handleClick = (value) => {
    setCount(value);
};

    return ( 
        <>
         <Item bebida={bebidas} />
        <button onClick={() => handleClick(count - 1)}>-</button>
        <h4> cantidad de click {count}</h4>
        <button onClick={() => handleClick(count + 1)}>+</button>
        </>
        
     );
}
 
export default ItemDetail;