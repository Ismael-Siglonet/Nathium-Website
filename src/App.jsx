import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Produtos from './pages/Produtos'
import Sobre from './pages/Sobre'
import Contacto from './pages/Contacto'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="produtos" element={<Produtos />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
