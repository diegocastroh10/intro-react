import { useState, useContext } from "react";
import { Form, Button } from 'react-bootstrap';
import { UserContext } from '../context/EJContext'; 
import '../css/SesionUser.css';

const SesionUser = () => {
    const { register } = useContext(UserContext); // Obtener la función register del contexto
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [contrasena2, setContrasena2] = useState("");
    const [error, setError] = useState(false);
    const [validar, setValidar] = useState(false);
    const [errorContrasena, setErrorContrasena] = useState(false);

    // Validar datos formulario y registrar usuario
    const validarInput = async (e) => {
        e.preventDefault();

        if (nombre === '' || email === '' || contrasena === '' || contrasena2 === '') {
            setError(true);
            return;
        }

        if (contrasena !== contrasena2) {
            alert('Las contraseñas no coinciden.');
            setErrorContrasena(true);
            setValidar(false);
            return;
        } else {
            setErrorContrasena(false);
        }

        if (contrasena.length < 6) {
            alert('La contraseña debe tener al menos 6 caracteres.');
            setErrorContrasena(true);
            setValidar(false);
            return;
        } else {
            setValidar(true);
            alert('Usuario registrado.');
        }

        // Llama a la función register del contexto
        await register(nombre, email, contrasena);
    };

    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            <h1>Registrar usuario</h1>
            <div className='contenedorForm'>
                <form onSubmit={validarInput}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Nombre de usuario" onChange={(e) => setNombre(e.target.value)} value={nombre} />

                        <Form.Label>Correo</Form.Label>
                        <Form.Control type="email" placeholder="pizzerialinares@gmail.com" onChange={(e) => setEmail(e.target.value)} value={email} />

                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="*******" onChange={(e) => setContrasena(e.target.value)} value={contrasena} />
                        {errorContrasena ? <p className='error'>Modifica tu contraseña.</p> : null}

                        <Form.Label>Confirmar contraseña</Form.Label>
                        <Form.Control type="password" placeholder="*******" onChange={(e) => setContrasena2(e.target.value)} value={contrasena2} />

                        <Form.Text className="text-muted">
                            Cuida tus datos de usuario y no los compartas.
                        </Form.Text>
                        <Button variant="primary" type="submit">
                            Registrar
                        </Button>
                    </Form.Group>
                    {error ? <p className='error'>Completa todos los campos.</p> : null}
                    {validar ? <p className='succes'>Has creado tu usuario.</p> : null}
                </form>
            </div>
        </div>
    );
}

export default SesionUser;
