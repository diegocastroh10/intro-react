import Home from './components/Home';
import SesionUser from './components/SesionUser';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav_bar from './components/nav-top/Nav_bar';
import Footer from './components/Footer';
import Login from './components/Login';
// import AddTarea from './components/AddTarea';
import { Container } from 'react-bootstrap';
import Cart from './components/Cart';
import Pizza from './components/Pizza';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Container fluid id='grid-container'>
        {/* Barra de navegación */}
        <Nav_bar className="header" />

        <div className="content">
          {/* <AddTarea /> */}
          <Cart />
          <Pizza />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sesionUser' element={<SesionUser />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer className="footer" />
      </Container>
    </Router>
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