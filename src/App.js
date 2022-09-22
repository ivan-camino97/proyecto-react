import logo from './logo.svg';
import './App.css';
import './components/ItemListContainer.css'
import './components/Navbar.css'
import Micomponente from './components/Micomponente';
import NavBarra from './components/NavBar'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
   <div className=''>
    <NavBarra />
    <ItemListContainer  greeting={'bienvenido a distribuidora camino'}/>
   </div>
  );
}

export default App;
