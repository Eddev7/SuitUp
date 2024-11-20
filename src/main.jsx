import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

//router DOM
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// importação das paginas
import Home from './pages/Home.jsx';
import Cadastro from './pages/Cadastro.jsx';
import Login from './pages/Login.jsx';
import Menu from './components/Menu/Menu.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cadastro' element={<Cadastro/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
