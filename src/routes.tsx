import { Routes, Route, Form } from 'react-router-dom'
import Perfil from './pages/Perfil'
import Home from './pages/Home'

const RoutesProvider = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/perfil/:id" element={<Perfil />} />
      <Route path="/form" element={<Form />} />
    </Routes>
  )
}

export default RoutesProvider
