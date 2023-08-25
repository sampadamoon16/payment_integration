import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import CartDetails from './components/CartDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast';
import Headers from './components/Headers';
import Success from './components/Success';
import Cancel from './components/Cancel';



function App() {
  return (
    <>
    <Headers />
     <Routes>
      <Route  path='/' element={<Home />}/>
      <Route  path='/cart' element={<CartDetails />}/>
      <Route  path='/success' element={<Success />}/>      
      <Route  path='/cancel' element={<Cancel />}/>
     </Routes>
     <Toaster />
    </>
  );
}

export default App;
