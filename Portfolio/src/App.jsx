import { useState } from 'react'
import {BrowserRouter} from "react-router-dom"
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import profie from './assets/avater.jpg'  
import './App.css'
import Home from './Home'
import About from './About'
import Project from './Project'
import Contact from './Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/project" element={<Project/>} />
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
