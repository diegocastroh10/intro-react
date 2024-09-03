import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import '../css/NotFound.css';

const NotFound = () => {
  return (
    <div className='not-found'>
        <h1>PAGE NOT FOUND</h1>
        <p>Ingresa un ruta de enlace válida.</p>
        <Link to="/">
            <Button variant="outline-primary">
                Volver
            </Button>
        </Link>
    </div>
  )
}

export default NotFound