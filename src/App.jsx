import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppProvider } from './contexto/contexto';

import Menu from './componentes/Menu';
import Aleatorios from './componentes/Aleatorios'
import Capturados from './componentes/Capturados'
import Favoritos from './componentes/Favoritos'
import Listas from './componentes/Listas'
import Pokemon from './componentes/Pokemon'
import Usuarios from './componentes/Usuarios'
import './App.css'

function App() {

  return (
     <AppProvider>
    <Router>

      <Menu />

      <Routes>
        <Route path="/Aleatorios" element={<Aleatorios/>} />
        <Route path="/Capturados" element={<Capturados/>} />
        <Route path="/Favoritos" element={<Favoritos/>} />
        <Route path="/" element={<Listas/>} />
        <Route path="/Pokemon/:name" element={<Pokemon/>} />
        <Route path="/Usuarios" element={<Usuarios/>} />
      </Routes>
    </Router>
    </AppProvider>
  )
}

export default App
