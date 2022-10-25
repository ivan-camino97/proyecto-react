import { Button } from "bootstrap";
import { useEffect, useState } from "react";

const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(parseInt(initial));


const handleSubtract = () => {
    setCount(count - 1)
}

const handleAdd = () => {
    setCount (count + 1)
}

const handleClick = () => onAdd(count);

useEffect(() =>{
    setCount(parseInt(initial));

},[initial])

return (
    <div className="itemCountContainer">
        <div>
            <Button varian="danger" disabled={count <= 1} onClick={handleSubtract}>
               -
            </Button>
            <h5>{count}</h5>
            <Button varian="succes" disabled={count >= stock} onClick={handleAdd}>
               +
            </Button>
        </div>
        <div>
        <Button varian="primary" disabled={stock <= 0} onClick={handleClick}>
               Agregar al carrito
            </Button>
        </div>

    </div>
)
}
export default ItemCount;