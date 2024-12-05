import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import AboutUs from './Components/About/AboutUs' 
import Contact from './Components/Contact/Contact'
import Villas from './Components/Villa/Villas'
import SingleVilla from './Components/Villa/SingleVilla'
import './App.css'
const App = () => {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/villas' element={<Villas/>}/>
        <Route path='/villa/:id' element={<SingleVilla/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App