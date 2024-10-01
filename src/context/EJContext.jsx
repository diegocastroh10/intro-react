import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

// eslint-disable-next-line react/prop-types
const UserProvider = ({ children }) => {
    const [token, setToken] = useState(null); 
    const [email, setEmail] = useState(null);
    const [userProfile, setUserProfile] = useState(null); // Almacena el perfil del usuario

    // Revisar si hay un token guardado al cargar el componente
    useEffect(() => {
        const storedToken = localStorage.getItem('token'); // O sessionStorage.getItem('token')
        const storedEmail = localStorage.getItem('email'); // Guardamos también el email si lo necesitas
        if (storedToken) {
            setToken(storedToken); // Si existe un token en localStorage, lo guardamos en el estado
            setEmail(storedEmail); // Carga también el email almacenado
        }
    }, []); // Solo se ejecuta una vez cuando el componente se está

    // Función para obtener el perfil del usuario
    const fetchUserProfile = async () => {
        if (!token) return; // Si no hay token, no hacemos la solicitud

        try {
            const response = await fetch('http://localhost:5000/api/auth/me', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`, // Enviamos el token en la cabecera
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Error al obtener el perfil del usuario');
            }

            const data = await response.json();
            setUserProfile(data); // Almacenamos la información del perfil en el estado

        } catch (error) {
            console.error(error);
            alert('No se pudo obtener el perfil del usuario.');
        }
    };

    // Función para manejar el login
    const login = async (email, password) => {
        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }), // Verificar que email y password no estén vacíos
            });

            if (!response.ok) {
                throw new Error('Error al iniciar sesión');
            }

            const data = await response.json();
            setToken(data.token);
            setEmail(data.email);

            localStorage.setItem('token', data.token);
            localStorage.setItem('email', data.email);
            await fetchUserProfile(); // Obtener el perfil del usuario después de iniciar sesión

        } catch (error) {
            console.error(error);
            alert('Login fallido. Verifica tus credenciales.');
        }
    };

    // Nueva función para manejar el registro
    const register = async (nombre, email, password) => {
        try {
            const response = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nombre, email, password }), // Datos del registro
            });

            if (!response.ok) {
                throw new Error('Error al registrar el usuario');
            }

            // eslint-disable-next-line no-unused-vars
            const data = await response.json();
            alert('Usuario registrado exitosamente. Ahora puedes iniciar sesión.');
            // Puedes redirigir a la página de login si lo deseas
        } catch (error) {
            console.error(error);
            alert('Registro fallido. Verifica tus datos.');
        }
    };

    // Función para manejar el logout
    const logout = () => {
        setToken(null); // Limpia el estado del token
        setEmail(null); // Limpia el estado del email
        setUserProfile(null); // Limpia el estado del perfil del usuario
        localStorage.removeItem('token'); // Elimina el token del localStorage
        localStorage.removeItem('email'); // Elimina el email del localStorage
    };

    return (
        <UserContext.Provider value={{ token, logout, email, login, userProfile, fetchUserProfile, register }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
