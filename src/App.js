import React, { useEffect } from 'react'
import './app.css'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import Navbar from './Navbar'
import Calculator from './Calculator'

const App = () => {
  useEffect(() => {
    M.AutoInit()
  }, [])
  return (
    <div>
      <Navbar />
      <Calculator />
    </div>
  )
}

export default App
