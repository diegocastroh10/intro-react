/* eslint-disable react/prop-types */
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
import UserProvider, { UserContext } from './context/EJContext'; // Importa el UserProvider y el UserContext

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';

function App() {
  const ProtectedRoute = ({ children }) => {
    const { token } = useContext(UserContext);
    return token ? children : <Navigate to="/login" />;
  };

  const RedirectIfLoggedIn = ({ children }) => {
    const { token } = useContext(UserContext);
    return token ? <Navigate to="/" /> : children;
  };
  

  return (
    <UserProvider>
      <CartProvider>
        <Router>
          <Container fluid id='grid-container'>
            {/* Barra de navegación */}
            <Nav_bar className="header" />

            <div className="content">
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/sesionUser' element={<RedirectIfLoggedIn><SesionUser /></RedirectIfLoggedIn>} />
                <Route path='/login' element={<RedirectIfLoggedIn><Login /></RedirectIfLoggedIn>} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/pizza/:id' element={<Pizza />} />
                <Route path='/profile' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
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
    </UserProvider>
  );
}

export default App;
