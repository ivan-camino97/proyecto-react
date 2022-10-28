import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProduct } from './utils/products';
import Item from './ItemListc/Item';
import ItemDetail from './ItemDetail';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

const ItemDetailContainer = () => {

/*const { id } = useParams()
const [ bebidas, setBebidas] = useState();
useEffect(() => {
    getProduct(id)
    .then((data) => {
    setBebidas(data)
    })
    .catch(error => console.warn(error))
}, [id])*/
const [ bebidas, setBebidas] = useState([]);
const { id } = useParams()
useEffect(() => {
    const db = getFirestore()
    
    // creamos una función para traernos un producto de firebase
    
        const getProducto = async () => {
    // vamos a usar el método doc, que se encarga de filtrar el producto
          const queryRef = doc(db, "ítems", id);
    // recibimos lo producto y lo guardamos en una constante
          const response = await getDoc(queryRef);
    // creamos un nuevo objeto con esos datos
          const newItem = {
            id: response.id,
            ...response.data(),
          };
          setTimeout(()=>{
    // seteamos el estado
            setBebidas(newItem);
          }, 2000)
        };
    // llamamos la función
        getProducto();
      }, [id]);
      console.log(id);

    return (
        <Container>
           <h1>Detalle del producto</h1> 
          {bebidas && <ItemDetail bebidas={bebidas} />}
        </Container> 
    
    );
}
 
export default ItemDetailContainer;