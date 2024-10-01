import { useState, useContext } from "react";
import { Form, Button } from 'react-bootstrap';
import { UserContext } from '../context/EJContext'; // Importar el UserContext
import '../css/Login.css';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const { login } = useContext(UserContext); // Obtener la función login del contexto

    // Validar datos formulario e iniciar sesión
    const handleLogin = async (e) => {
        e.preventDefault();
      
        if (email === '' || password === '') {
          setError(true);
          return;
        }
      
        setError(false);
      
        try {
          await login(email, password);  // Aquí debes verificar que email y password tengan valores válidos
        } catch (err) {
          console.error('Error al iniciar sesión', err);
        }
      };
      

    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            <h1>Iniciar sesión</h1>
            <div className='contenedorForm'>
                <form onSubmit={handleLogin}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Correo</Form.Label>
                        <Form.Control type="email" placeholder="pizzerialinares@gmail.com" onChange={ (e) => setEmail(e.target.value)} value={email} />

                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="*******" onChange={ (e) => setPassword(e.target.value)} value={password} />

                        <Form.Text className="text-muted">
                            Cuida tus datos de usuario y no los compartas.
                        </Form.Text>
                        <Button variant="primary" type="submit">
                            Ingresar
                        </Button>
                    </Form.Group>
                    { error ? <p className='error'>Completa todos los campos.</p> : null }
                </form>
            </div>
        </div>
    );
};

export default Login;
