import { useState } from "react";
import { Form, Button } from 'react-bootstrap';
import './Login.css'

const Login = () => {
    const [nombre, setNombre] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [error, setError] = useState(false);
    const [errorContrasena, setErrorContrasena] = useState(false);
    const user = 'diego@latam.cl';
    const pass = 'asd123';

    // Validar datos formulario -> De esta forma nos aseguramos el registro de los datos
    const validarInput = (e) => {
        e.preventDefault();

        if (nombre == '' || contrasena == '') {
            setError(true);
            return 
        }
    
        if (contrasena.length < 6) {
            alert('La contraseña debe tener al menos 6 caracteres.');
            setErrorContrasena(true);
            return;
        }

        if (nombre == user && contrasena == pass) {
            alert('Has iniciado sesión con éxito. Bienvenido');
        } else {
            alert('Los datos son incorrectos. Reingresa tu información.')
        }

        setError(false);
        setErrorContrasena(false)
    };

    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            <h1>Iniciar sesión</h1>
            <div className='contenedorForm'>
                <form onSubmit={validarInput}>
                    {/* Formularios react-bootstrap */}
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Correo</Form.Label>
                        <Form.Control type="email" placeholder="pizzerialinares@gmail.com" onChange={ (e) => setNombre(e.target.value)} value={nombre} />

                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="*******" onChange={ (e) => setContrasena(e.target.value)} value={contrasena} />
                        { errorContrasena ? <p className='error'>Modifica tu contraseña.</p> : null }

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
    )
}

export default Login