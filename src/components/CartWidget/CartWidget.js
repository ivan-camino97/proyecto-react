import { useContext } from 'react';
import { BsCart } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import CartContext from '../../context/cartContext';
import { Badge } from 'react-bootstrap';

const CartWidget  = () => {
const { totalQuantity } = useContext(CartContext)
    return (
    <>
        <Link to='/cart'>
        <BsCart />
        </Link>
        {totalQuantity > 0 && (
            <Badge pill bg="danger">{totalQuantity}</Badge>
        )}
    </>
    );
}
 
export default CartWidget;