import { useContext, useState } from "react";
import Item from "./ItemListc/Item";
import ItemCount from "./ItemCount/ItemCount"
import { Button } from "bootstrap";
import { Link } from "react-router-dom";
import cartContext from "../context/cartContext";


const ItemDetail = ({ bebidas }) => {
    const { addItem } = useContext(cartContext);
    const [count, setCount] = useState(0);
    const [showItemCount, setShowItemCount] = useState(true);
    
const handleAdd = (value) => {
    setCount(value);
    setShowItemCount(false)
    addItem(bebidas, value)
    
};

    return ( 
        <>
         <Item bebida={bebidas} />
         {
            showItemCount && (
            <ItemCount initial={1} stock={10} onAdd={handleAdd} />
            )

         }
         {
            !showItemCount && (
                <Link to='/cart'>
                <Button variant="success">
                    Terminar compra
                </Button>
                </Link>
            )
         }
        
        </>
        
     );
}
 
export default ItemDetail;