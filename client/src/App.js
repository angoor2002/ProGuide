import React from 'react'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import { useState } from 'react'
function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
