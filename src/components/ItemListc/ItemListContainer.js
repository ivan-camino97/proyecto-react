import './ItemListContainer.css'
import ItemList from './ItemList'
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import { getProducts } from '../utils/products'



const ItemListContainer = ({ greeting }) => {
const { categoryName } = useParams()
const [ bebidas, setBebidas] = useState([]);

    useEffect(() => {
        console.log(categoryName)
    }, [categoryName])
    
useEffect(() => {
getProducts()
.then((data) => setBebidas(data))
.catch((error) => console.warn(error))
}, [])

    return (  
        <div className="container">
        <h1 className="title"> nuestros Productos </h1>
        <p className="greeting"> {greeting}</p>
        <ItemList bebidas={bebidas} />
        </div>
    );
}
 
export default ItemListContainer;