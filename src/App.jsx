import { Route, Routes } from 'react-router-dom'
import React from 'react'
import Navegation from './Components/Navegation'
import Footer from './Components/Footer'
import Home from './views/Home'
import Favorito from './views/Favorito'

const App = () => {
  return (
    <>
      <div>
        <Navegation />
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/favorito'
            element={<Favorito />}
          />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
