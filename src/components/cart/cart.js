import { useContext, useState } from 'react';
import { Container, Table,  Modal, Button } from 'react-bootstrap';
import CartContext from '../../context/cartContext';
import { FiTrash2 } from "react-icons/fi"
import { Button } from 'bootstrap';
import { Link } from "react-router-dom";

const buyerMock = {
  name: 'distribuidora camino',
  phone: '1125097866',
  email: 'distribuidoraC@gmail.com'
}

const Cart = () => {
  const [user, setUser] = useState(buyerMock) 
  const [showModal, setShowModal] = useState(false)

const { cart, total, removeItem } = useContext(CartContext)
console.log({cart, total});

const handleRemove = (itemId) => {
    removeItem(itemId)
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
    <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>finalizar compra</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Ingrese email" />
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="ingresar nombre" />
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Telefono</Form.Label>
            <Form.Control type="text" placeholder="ingresar telefono" />
         </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
           cancelar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            comprar
          </Button>
        </Modal.Footer>
      </Modal>
       </Container>
    );
}
 
export default Cart;