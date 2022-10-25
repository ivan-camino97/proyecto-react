import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProduct } from './utils/products';
import Item from './ItemListc/Item';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

const { id } = useParams()
const [ bebidas, setBebidas] = useState();
useEffect(() => {
    getProduct(id)
    .then((data) => {
    setBebidas(data)
    })
    .catch(error => console.warn(error))
}, [id])

    return (
        <Container>
           <h1>Detalle del producto</h1> 
          {bebidas && <ItemDetail bebidas={bebidas} />}
        </Container> 
    
    );
}
 
export default ItemDetailContainer;