import {Routes,Route, Navigate} from 'react-router-dom'
import Login from './components/Login.js'
import Logout from './components/Logout.js'
import Dashboard from './components/Dashboard.js'
import CartList from './components/CartList.js'
import Bill from './components/Bill.js'
import Navbar from './components/Navbar.js'


function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={ <Navigate to="/Login"/>}></Route>
        <Route path='Login' element={<Login/>}></Route>
        <Route path='Dashboard' element={<Dashboard/>}></Route>
        <Route path='Logout' element={<Logout/>}></Route>
        <Route path='*' element={<Login/>}></Route>
        <Route path='CartList' element={<CartList/>}></Route>
        <Route path='Bill' element={<Bill/>}></Route>
      </Routes>

    </>
   
    
   
  );
}

export default App;
