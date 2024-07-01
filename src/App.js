import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import BlogDetails from './pages/BlogDetails'
import Cart from './pages/Cart'

const App = () => {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/services' element={<Services />} />
      <Route path='/blogs' element={<Blogs />} />
      <Route path='/blogs/:id' element={<BlogDetails />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/login' element={<Login />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/register' element={<Register />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App