import { createContext, useState } from "react";

export const EJContext = createContext();

// eslint-disable-next-line react/prop-types
const CounterProvider = ({ children }) => {

    const [counter, setCounter] = useState(0);
    return (
        // eslint-disable-next-line react/jsx-no-undef
        <EJContext.Provider value={{ counter, setCounter }}>
            {children}
        </EJContext.Provider>
    );
};

export default CounterProvider;