import { useState } from "react";
import Item from "./ItemListc/Item";
import ItemCount from "./ItemCount/ItemCount"


const ItemDetail = ({ bebidas }) => {
    const [count, setCount] = useState(0);
    const [showItemCount, setShowItemCount] = useState(true)

const handleAdd = (value) => {
    setCount(value);
    setShowItemCount(false);
};

    return ( 
        <>
         <Item bebida={bebidas} />
         {
            showItemCount && (
            <ItemCount initial={1} stock={10} onAdd={handleAdd} />
            )

         }
        
        </>
        
     );
}
 
export default ItemDetail;