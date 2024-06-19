import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Components/Pages/Home';
import EachMovie from '../Components/EachMovie/EachMovie';

const Router = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movie/:id/:description' element={<EachMovie/>}/>

    </Routes>
    </>
  )
}

export default Router;