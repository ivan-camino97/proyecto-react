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

function App() {
  return (
   <BrowserRouter>
    <NavBarra />
    <Routes>
      <Route path='/' element={<ItemListContainer  greeting={'bienvenido a distribuidora camino'}/>} />
      <Route path='/category/:categoryName' element={<ItemListContainer  greeting={'bienvenido a distribuidora camino'}/>} />
      <Route path='/item/:id' element={<ItemDetailContainer/>} />
      <Route path='/Cart' element={<Cart/>} />
      <Route path='/Checkout' element={<Checkout/>} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
