import { useState } from 'react';
import './App.css';
import Cart from './Components/Cart';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router,
Routes,
Route } from 'react-router-dom'
import Datastate from './context/datacontext';
function App() {
  const [cart, setCart]=useState([])

 const  handlecart=(value)=>{
setCart([ ...cart.concat({...value,quantity:1})])
console.log(cart)

 };

 const dlt=(key)=>{
  console.log(key)
 const newcart=cart.filter((item)=>{
  return item.key!==key 
})
setCart(newcart)
console.log(cart)
 }

  return (
   <div>
 <Datastate>  
    <Router> 
    <Navbar cartlength={cart.length}/>
    <Routes>
      <Route exact path='/' element={<Home handlecart={handlecart}/>}/>
      <Route exact path='/cart' element={<Cart dlt={dlt} cart={cart}/>} />
      <Route/>
    </Routes>
    </Router>
    </Datastate> 
   </div>
  );
}

export default App;
