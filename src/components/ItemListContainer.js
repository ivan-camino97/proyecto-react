const ItemListContainer = ({ greeting }) => {
    return (  
        <div className="container">
        <h1 className="title"> nuestros Productos </h1>
        <p className="greeting"> {greeting}</p>
        </div>
    );
}
 
export default ItemListContainer;