import { BsCart } from 'react-icons/bs'
import { Link } from 'react-router-dom'
const CartWidget  = () => {
    return (  
        <Link to='/cart'>
        <BsCart />
        </Link>
    );
}
 
export default CartWidget;