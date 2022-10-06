import './ItemListContainer.css'
import ItemList from './ItemList'
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import { getAllProducts, getAllProductsByCategory } from '../utils/products'



const ItemListContainer = ({ greeting }) => {
const { categoryId } = useParams()
const [ bebidas, setBebidas] = useState([]);

    
    
useEffect(() => {
    if (categoryId) {
getAllProductsByCategory(categoryId)
        .then((data) => setBebidas(data))
        .catch((error) => console.warn(error))
    }else {
        getAllProducts()
        .then((data) => setBebidas(data))
        .catch((error) => console.warn(error))
    }
}, [categoryId])

    return (  
        <div className="container">
        <h1 className="title"> nuestros Productos </h1>
        <p className="greeting"> {greeting}</p>
        <ItemList bebidas={bebidas} />
        </div>
    );
}
 
export default ItemListContainer;