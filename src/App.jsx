import { Routes, Route } from "react-router-dom";

import Login from './components/login&signup/Login'
import Signup from './components/login&signup/Signup'
import Home from './components/MainLayouts/Home/Home'
import About from './components/MainLayouts/About/About'
import Contact from './components/MainLayouts/Contact/Contact'

import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> 
    </>
  )
}

export default App
