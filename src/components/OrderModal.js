import { Modal, Form, Button } from "react-bootstrap";

const OrderModal = ({ showModal, onClose, onBuy}) => {
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
          <Button variant="secondary" onClick={handleClose}>
           cancelar
          </Button>
          <Button variant="primary" onClick={onBuy}>
            comprar
          </Button>
        </Modal.Footer>
      </Modal>
    );
}
 
export default OrderModal;