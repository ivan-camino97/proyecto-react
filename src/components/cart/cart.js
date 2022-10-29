import { useContext, useState } from 'react';
import { Container, Table,  Modal, Button, Form } from 'react-bootstrap';
import CartContext from '../../context/cartContext';
import { FiTrash2 } from "react-icons/fi"
import { Link } from "react-router-dom";
import { createOrder } from '../utils/order';
import OrderModal from '../OrderModal'

const buyerMock = {
  name: 'distribuidora camino',
  phone: '1125097866',
  email: 'distribuidoraC@gmail.com'
}

const Cart = () => {
  const [user, setUser] = useState(buyerMock) 
  const [showModal, setShowModal] = useState(false)
  const [orderId, setOrderId] = useState()
  const { cart, total, removeItem, clear } = useContext(CartContext)
        console.log({cart, total});

const handleRemove = (itemId) => {
    removeItem(itemId)
}

const handleBuy = async () => {
  const newOrder = {
  buyer: buyerMock,
  items: cart,
  total
  }
  const newOrderId = await createOrder(newOrder)
  setOrderId(newOrderId)
  clear()
}

const handleOpen = () => setShowModal(true);


const handleClose = () => setShowModal(false)

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
                <td><FiTrash2 onClick={() => handleRemove(item.id)}/></td>
            </tr>
            ))}
      </tbody>
      </Table>
      <h3>total: $ {total}</h3>
      <Button variant="success" onClick={handleOpen}>finalizar compra</Button>
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
    <OrderModal 
    showModal={showModal} 
    onClose={handleClose} 
    onBuy={handleBuy}
    orderId={orderId}/>
       </Container>
    );
}
 
export default Cart;