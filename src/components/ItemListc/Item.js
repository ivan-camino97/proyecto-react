import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const Item = ( { bebida } ) => {
    return ( 
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={bebida.pictureUrl} />
      <Card.Body>
        <Card.Title> { bebida.nombre } </Card.Title>
        <Card.Text>
          {bebida.description}
        </Card.Text>
        $ {bebida.price}
        <Card.Text>

        </Card.Text>
          <Link to={`/item/${bebida.id}`}>
          <Button variant="primary">
          Detalle
          </Button>
          </Link>
      </Card.Body>
    </Card>
     );
}
 
export default Item;