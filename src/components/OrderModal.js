import { useState } from "react";
import { Modal, Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

const OrderModal = ({ showModal, onClose, onBuy, orderId}) => {

    const [showOrderId, setShowOrderId] = useState(false)

    return (  
        <Modal show={showModal} onHide={onClose}>
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
            {!orderId && (
        <>
          <Button variant="secondary" onClick={onClose}>
           cancelar
          </Button>
          <Button variant="primary" onClick={onBuy}>
            comprar
          </Button>
        </>
            )}
        {orderId && (
            <>
            <Alert key='success' variant='success'>
                 {orderId}
            </Alert>
            <Link to='/'>
              <Button variant="primary">
                 seguir comprando
              </Button>
            </Link>
            </>
        )}
        </Modal.Footer>
      </Modal>
    );
}
 
export default OrderModal;