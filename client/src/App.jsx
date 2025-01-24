
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'

function App() {


  return (
   <div className='app'>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/cart' element={<Cart></Cart>}></Route>
      <Route path='/place-order' element={<PlaceOrder></PlaceOrder>}></Route>
      
    </Routes>
   </div>
  )
}

export default App
