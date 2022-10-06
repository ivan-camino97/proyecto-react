import Item from "./Item";
import './ItemList.css'

const ItemList = ( {bebidas} ) => {
    return ( 
        <div className="itemlist">
        
        {bebidas.map((bebida) => (
           <Item key={bebida.id} bebida={bebida} />
        ))}
       
        </div>
     );
}
 
export default ItemList;