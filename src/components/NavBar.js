import { Navbar, Container, Nav } from "react-bootstrap"  
import CartWidget from "./CartWidget/CartWidget";
import './CartWidget/CartWidget.css';
import { Link } from 'react-router-dom'

const NavBarra = () => {
     return (
       <Navbar bg="dark" variant="dark">
        <Container className="containernav">
          <Navbar.Brand as={Link} to='/'>
            Distribuidora camino
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>
              inicio
            </Nav.Link>
            <Nav.Link as={Link} to='/category/chica'>bebida chica</Nav.Link>
            <Nav.Link as={Link} to='/category/grande'>bebida grande</Nav.Link>
            <Nav.Link as={Link} to='/category/contacto'>Contacto</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    )
};

export default NavBarra;