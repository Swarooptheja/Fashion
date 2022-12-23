import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Addtobasket from './Addtobasket';
import Home from './Home';
import Main from './Main';

function Allroutes(props) {
    return (
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/main' element={<Main/>}/>
         <Route path="/addtobasket/:id" element={<Addtobasket/>}/>
           </Routes>
    )
}

export default Allroutes;