import { Navbar, Container, Nav } from "react-bootstrap"  
import CartWidget from "./CartWidget";
import './CartWidget.css'

const NavBarra = () => {
     return (
       <Navbar bg="dark" variant="dark">
        <Container className="containernav">
          <Navbar.Brand className="brand" href="#home">Distribuidora camino</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#nosotros">Nosotros</Nav.Link>
            <Nav.Link href="#prodcutos">Productos</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    )
};

export default NavBarra;