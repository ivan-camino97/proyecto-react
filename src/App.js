import logo from './logo.svg';
import './App.css';
import './components/ItemListc/ItemListContainer.css'
import './components/Navbar.css'
import Micomponente from './components/Micomponente';
import NavBarra from './components/NavBar'; 
import ItemListContainer from './components/ItemListc/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/cart/cart';
import Checkout from './components/Checkout'
import { useEffect } from 'react';
import { collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore';

function App() {
  useEffect(() => {
    const database = getFirestore();

     const itemReference = doc(database, 'Ítems', 'rSxlsXv4sX8isEZ2snn4');

     getDoc(itemReference)
       .then((snapshot) => {

       if(snapshot.exists()) {
         
         const item = {
           id: snapshot.id,
         ...snapshot.data()
       };
          console.log(item);
       }
     })
       .catch(error => console.warn(error));
  }, []);

  useEffect(() => {
    const database = getFirestore()

    const referenceCollection = collection(database, 'items');

    getDocs(referenceCollection)
    .then((snapshot) => {
      const list = snapshot
      .docs
      .map((doc) => ({
        id: doc.id ,
        ...doc.data()
      }))
      console.log(list);
    })
    .catch(error => console.warn(error))
   }, []);


  return (
   <BrowserRouter>
    <NavBarra />
    <Routes>
      <Route path='/' element={<ItemListContainer  greeting={'bienvenido a distribuidora camino'}/>} />
      <Route path='/category/:categoryId' element={<ItemListContainer  greeting={'bienvenido a distribuidora camino'}/>} />
      <Route path='/item/:id' element={<ItemDetailContainer/>} />
      <Route path='/Cart' element={<Cart/>} />
      <Route path='/Checkout' element={<Checkout/>} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
