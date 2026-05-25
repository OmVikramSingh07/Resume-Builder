import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/Layout'

const App = () => {
  return (
    <>
      <Routes>
        <Route path = '/' element = {<Home />}/>
        <Route path = 'app' element = {<Layout />}/>
      </Routes>
    </>
  )
}

export default App