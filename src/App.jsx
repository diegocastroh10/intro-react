import Home from './components/Home';
import SesionUser from './components/SesionUser';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav_bar from './components/nav-top/Nav_bar';
import Footer from './components/Footer';
import Login from './components/Login';
import { Container } from 'react-bootstrap';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Container fluid id='grid-container' className="d-grid">
      <Nav_bar className="header" />
      {/* <Home className="content" /> */}
      {/* <SesionUser className="content" /> */}
      {/* <Login className="content"  /> */}
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sesionUser' element={<SesionUser />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
      <Footer className="footer" />
    </Container>
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