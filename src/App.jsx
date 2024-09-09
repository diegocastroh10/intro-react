import Home from './pages/Home';
import SesionUser from './pages/SesionUser';
import Nav_bar from './components/nav-top/Nav_bar';
import Footer from './components/Footer';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Pizza from './pages/Pizza';
import Profile from './components/Profile';
import NotFound from './components/NotFound';
import CarritoCompras from './components/CarritoCompras';
import CartProvider from './context/CartContext'; // Importa el CartProvider

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <CartProvider> {/* Envuelve tu aplicación con el CartProvider */}
      <Router>
        <Container fluid id='grid-container'>
          {/* Barra de navegación */}
          <Nav_bar className="header" />

          <div className="content">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/sesionUser' element={<SesionUser />} />
              <Route path='/login' element={<Login />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/pizza/p001' element={<Pizza />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/404' element={<NotFound />} />
            </Routes>
          </div>

          {/* Carrito lateral */}
          <div className="carrito-lateral">
            <CarritoCompras />
          </div>

          {/* Footer */}
          <Footer className="footer" />
        </Container>
      </Router>
    </CartProvider>
  );
}

export default App;





/* 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Products/>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
 ejemplo VITE
*/