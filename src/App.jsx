import React from 'react';
import { useState } from 'react'
import './App.css'
import HomePage from './Pages.jsx/HomePage';
import Register from './Pages.jsx/Register';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HomePage />
    
    </>
  )
}

export default App
