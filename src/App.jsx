import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Produtos from './pages/Produtos'
import Sobre from './pages/Sobre'
import Contacto from './pages/Contacto'
import { products } from './data/content'

function LegacyProductRedirect() {
  const { productId } = useParams()
  const productExists = products.some((product) => product.id === productId)
  return <Navigate to={productExists ? `/produtos#${productId}` : '/produtos'} replace />
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="produtos" element={<Produtos />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="contactos" element={<Navigate to="/contacto" replace />} />
          <Route path="contact" element={<Navigate to="/contacto" replace />} />
          <Route path="products" element={<Navigate to="/produtos" replace />} />
          <Route path="produto" element={<Navigate to="/produtos" replace />} />
          <Route path="produto/:productId" element={<LegacyProductRedirect />} />
          <Route path="about" element={<Navigate to="/sobre" replace />} />
          <Route path="historia" element={<Navigate to="/sobre#historia" replace />} />
          <Route path="equipa" element={<Navigate to="/sobre" replace />} />
          <Route path="faq" element={<Navigate to="/#faq" replace />} />
          <Route path="simular" element={<Navigate to="/#simular" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
