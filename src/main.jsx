import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// redux
import { Provider } from 'react-redux'
import store from './store/store.js'

//router DOM
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// importação das paginas e componentes.
import Home from './pages/Home.jsx';
import Cadastro from './pages/Cadastro.jsx';
import Login from './pages/Login.jsx';
import Menu from './components/Menu/Menu.jsx';
import ProductPage from './pages/ProductPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Menu/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cadastro' element={<Cadastro/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/product/:id' element={<ProductPage/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
)
