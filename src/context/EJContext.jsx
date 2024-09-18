import { createContext, useState } from "react";

export const UserContext = createContext();

// eslint-disable-next-line react/prop-types
const UserProvider = ({ children }) => {
    const [token, setToken] = useState(true);
    const [counter, setCounter] = useState(0);

    // Método logout que cambia el token a false
    const logout = () => {
        setToken(false);
    };

    return (
        <UserContext.Provider value={{ counter, setCounter, token, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;