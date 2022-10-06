import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProduct } from './utils/products';
import Item from './ItemListc/Item';

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
console.log(bebidas)
    return (
        <Container>
           <h1>Detalle del producto</h1> 
           <Item bebida={bebidas} />
        </Container> 
    
    );
}
 
export default ItemDetailContainer;