import { useState } from "react";
import { Form, Button } from 'react-bootstrap';
import '../css/SesionUser.css';

const SesionUser = () => {
    // const [state, setState] = useState(0);
    const [nombre, setNombre] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [contrasena2, setContrasena2] = useState("");
    const [error, setError] = useState(false);
    const [validar, setValidar] = useState(false);
    const [errorContrasena, setErrorContrasena] = useState(false);

    // Validar datos formulario -> De esta forma nos aseguramos el registro de los datos
    const validarInput = (e) => {
        e.preventDefault();

        if (nombre == '' || contrasena == '' || contrasena2 == '') {
            setError(true);
            return 
        }

        if (contrasena !== contrasena2) {
            alert('Las contraseñas no coinciden.');
            setErrorContrasena(true);
            setValidar(false);
            return;
        } else {
            setValidar(true);
        }
    
        if (contrasena.length < 6) {
            alert('La contraseña debe tener al menos 6 caracteres.');
            setErrorContrasena(true);
            setValidar(false);
            return;
        } else {
            setValidar(true);
            alert('Usuario registrado.')

        }



        setError(false);
        setErrorContrasena(false)
    };

    return (
        <div className="d-flex flex-column align-items-center justify-content-center" >
            <h1>Registrar usuario</h1>
            {/* <button onClick={ () => setState(state + 1) }>Contador: {state}</button> */}
            <div className='contenedorForm'>
                <form onSubmit={validarInput}>
                    {/* Formularios react-bootstrap */}
                    <Form.Group controlId="formBasicEmail">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control type="email" placeholder="pizzerialinares@gmail.com" onChange={ (e) => setNombre(e.target.value)} value={nombre} />

                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="*******" onChange={ (e) => setContrasena(e.target.value)} value={contrasena} />
                    { errorContrasena ? <p className='error'>Modifica tu contraseña.</p> : null }

                    <Form.Label>Confirmar contraseña</Form.Label>
                    <Form.Control type="password" placeholder="*******" onChange={ (e) => setContrasena2(e.target.value)} value={contrasena2} />

                    <Form.Text className="text-muted">
                        Cuida tus datos de usuario y no los compartas.   
                    </Form.Text>
                    <Button variant="primary" type="submit">
                            Ingresar
                    </Button>
                    </Form.Group>
                    { error ? <p className='error'>Completa todos los campos.</p> : null }
                    { validar ? <p className='succes'>Has creado tu usuario.</p> : null }

                </form>
            </div>
        </div>
    )
}

export default SesionUser