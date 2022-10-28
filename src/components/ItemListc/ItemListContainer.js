import './ItemListContainer.css'
import ItemList from './ItemList'
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import { getAllProducts, getAllProductsByCategory } from '../utils/products'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';



const ItemListContainer = ({ greeting }) => {
const { categoryId } = useParams()
const [ bebidas, setBebidas] = useState([]);
    
    
/*useEffect(() => {
    if (categoryId) {
getAllProductsByCategory(categoryId)
        .then((data) => setBebidas(data))
        .catch((error) => console.warn(error))
    }else {
        getAllProducts()
        .then((data) => setBebidas(data))
        .catch((error) => console.warn(error))
    }
}, [categoryId])*/
useEffect(() => {
    const db = getFirestore()
    // creamos una función para traernos los productos de firebase
        const getData = async () => {
    // hacemos condicionales usando el parámetro de useParams. 
    // si no hay categorías, va a traer todos los productos
          const queryRef = !categoryId
            ? collection(db, "ítems")
    // si hay categorías, nos va a traer los prod de esa categoría
            : query(
                collection(db, "ítems"),
                where("category", "==", categoryId)
              );
    // recibimos los productos y lo guardamos en una constante
          const response = await getDocs(queryRef);
    // hacemos un map, para crear un nuevo objeto con los datos que recibimos
          const productos = response.docs.map((doc) => {
            const newProduct = {
              ...doc.data(),
              id: doc.id,
            };
    // retornamos los productos
            return newProduct;
          });
          setTimeout(()=>{
    // actualizamos el estado con los productos que recibimos
            setBebidas(productos);
          }, 2000)
    
        };
    //llamamos a la función
        getData();
      }, [categoryId]);
    

    return (  
        <div className="container">
        <h1 className="title"> nuestros Productos </h1>
        <p className="greeting"> {greeting}</p>
        <ItemList bebidas={bebidas} />
        </div>
    );
}
 
export default ItemListContainer;