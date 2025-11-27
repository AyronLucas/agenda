import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Clientes from './pages/Clientes'
import Home from './pages/Home'
import PageCreateCliente from './pages/Clientes/create'
import PageUpdateCliente from './pages/Clientes/update'
import PageCreateAtendimento from './pages/Atendimentos/create'
import PageUpdateAtendimento from './pages/Atendimentos/update'
import Atendimentos from './pages/Atendimentos'
import { ToastContainer } from 'react-toastify'
import Login from './pages/Login'
import { AuthProvider } from './auth/Context'
import PrivateRoute from './router/privateRoute'

function App() {
  return (
    <AuthProvider>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />

        <Route element={<PrivateRoute />}>
        <Route path='/clientes' element={<Clientes />} />
        <Route path='/create/cliente' element={<PageCreateCliente />} />
        <Route path='/update/cliente' element={<PageUpdateCliente/>} />
        <Route path='/atendimentos' element={<Atendimentos />} />
        <Route path='/create/atendimento' element={<PageCreateAtendimento />} />
        <Route path='/update/atendimento' element={<PageUpdateAtendimento/>} />
        </Route>

      </Routes>

      <ToastContainer
        position="bottom-center"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ width: '50%' }}
      />

      <Footer />
    </AuthProvider>
  )
}

export default App
