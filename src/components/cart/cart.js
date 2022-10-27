import { useContext } from 'react';
import { Container, Table } from 'react-bootstrap';
import CartContext from '../../context/cartContext';
import { FiTrash2 } from "react-icons/fi"
import { Button } from 'bootstrap';
import { Link } from "react-router-dom";

const Cart = () => {

const { cart, total, removeItem } = useContext(CartContext)
console.log({cart, total});

const handleClick = (itemId) => {
    removeItem(itemId)
}

const showTable = cart.lenght > 0
    return ( 
        <Container>
    <h1>carrito de compras</h1>
    {showTable && ( 
   <>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>titulo</th>
          <th>precio</th>
          <th>cantidad</th>
          <th>accion</th>
        </tr>
      </thead>
      <tbody>
            {cart.map((item) =>(
            <tr key={item.id}>
                <td>{item.nombre}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td><FiTrash2 onClick={() => handleClick(cart[0].id)}/></td>
            </tr>
            ))}
      </tbody>
      </Table>
      <h3>total: $ {total}</h3>
   </>
    )}
    {!showTable&& (
<>
    <h3>carrito vacio</h3>
    <Link to='/'>
      <Button variant="success">Ver bebidas</Button>
    </Link>
</>
    )}
       </Container>
    );
}
 
export default Cart;