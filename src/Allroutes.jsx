import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Addtobasket from './Addtobasket';
import { Authorization } from './components/Authorization';
import Cartpage from './components/Cartpage';
import { Login } from './components/Login';
import Ordersummary from './components/Ordersummary';
import { Otp } from './components/Otp';
import { Payment } from './components/Payment';
import { Paymentsuccess } from './components/Paymentsuccess';
import { Success } from './components/Success';
// import Ordersummary from './components/ordersummary';
import Home from './Home';
import Main from './Main';

function Allroutes(props) {
    return (
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/main' element={<Main/>}/>
         <Route path="/addtobasket/:id" element={<Addtobasket/>}/>
         <Route path='/cartpage' element={<Authorization><Cartpage/></Authorization>}/>
         <Route path='/ordersummary' element={<Authorization><Ordersummary/></Authorization>}/>
         <Route path='/payment' element={<Authorization><Payment/></Authorization>} />
         <Route path='/paymentsuccess' element={<Authorization><Paymentsuccess/></Authorization>} />
         <Route path='/success' element={<Authorization><Success/></Authorization>} />
         <Route path='/otp' element={<Authorization><Otp/></Authorization>} />
         <Route path='/login' element={<Login/>} />
           </Routes>
    )
}

export default Allroutes;