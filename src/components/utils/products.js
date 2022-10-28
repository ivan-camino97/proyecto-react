import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";

const bebidas = [
    { nombre:'CocaGrande', category:'grande', description:'cocacola 2.250ml', price: 500, pictureUrl:'https://club23.com.ar/wp-content/uploads/2021/11/Coca-Cola-2.25L.jpg', stock: 10},
    { nombre:'CocaChica', category:'chica', description:'cocacola 500ml', price: 200,pictureUrl:'https://ardiaprod.vtexassets.com/arquivos/ids/228489-800-auto?v=637959904262570000&width=800&height=auto&aspect=true', stock: 10},
    { nombre:'CocaLata', category:'chica', description:'cocacola 354ml', price: 150, pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_856341-MLA46350484270_062021-O.webp', stock: 10}
]

export const getAllProducts = () => {
const database = getFirestore()
const collectionReference = collection(database, 'items');
return  getDocs(collectionReference)
    .then(snapshot => {
        const list = snapshot
        .docs
        .map((doc) => ({
            id: doc.id,
            ...bebidas.data()
        }));
        return list;
    })
    .catch(error => console.warn(error))
};

 export const getProduct = (id) => {
    const database = getFirestore();
    const itemReference = doc(database, 'item', id)
    return getDoc(itemReference)
    .then(snapshot => {
    if(snapshot.exists()) {
        const item = {
         id: snapshot.id,
         ...snapshot.data()
        };
        return item;
       }
    })
    
}; 
    

    export const getAllProductsByCategory = (categoryId) => {
        const database = getFirestore()
const collectionReference = collection(database, 'items');
const collectionQuery = query(collectionReference, where('category', '==', categoryId))
return  getDocs(collectionQuery)
    .then(snapshot => {
        if(snapshot.size === 0) return [];
        const list = snapshot
        .docs
        .map((doc) => ({
            id: doc.id,
            ...bebidas.data()
        }));
        return list;
    })
    .catch(error => console.warn(error))
        };
    
    export const createAllProducts = async () => {

    try{
    const database = getFirestore()

    const collectionReference = collection(database, 'items');

        for (let i = 0; i < bebidas.length; i++) {
           
            const snapshot = await addDoc(collectionReference, bebidas[i]);
        }
        }catch (error) {
          console.warn(error)
        }
    }