import { useEffect, useState } from 'react'
import {BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom'
import './App.css'
import Home from './components/home'
import ProductDetail from './components/productDetail'
import ProductDetail2 from './components/productDetail2'
import ProductDetail3 from './components/productDetail3'
import Sidebar from './components/sidebar'
import Login from './components/login'
import Footwear from './components/footwear'
import FootwearDetail from './components/footwearDetail'
import Shirt from './components/shirt'
import ShirtDetail from './components/shirtDetail'
import About from './components/about'
import Contact from './components/contact'


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/productDetail/:id' element={<ProductDetail/>}/>
      <Route path='/productDetail2/:id' element={<ProductDetail2/>}/>
      <Route path='/productDetail3/:id' element={<ProductDetail3/>}/>
      <Route path='/sidebar' element={<Sidebar/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/footwear' element={<Footwear/>}/>
      <Route path='/footwearDetail/:id' element={<FootwearDetail/>}/>
      <Route path='/shirt' element={<Shirt/>}/>
      <Route path='/shirtDetail/:id' element={<ShirtDetail/>}/> 
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
};

export default App
