import { createContext, useState } from 'react';

// Crea el contexto
export const CartContext = createContext();

// Componente proveedor del carrito
// eslint-disable-next-line react/prop-types
const CartProvider = ({ children }) => {
  // Estado para manejar los elementos en el carrito
  const [cartItems, setCartItems] = useState([]);

  // Función para añadir pizzas al carrito
  const addToCart = (pizza) => {
    setCartItems([...cartItems, pizza]); // Añade la pizza al carrito
  };

  // Función para calcular el precio total
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <CartContext.Provider value={{ cartItems, addToCart, totalPrice }}>
        {children}
      </CartContext.Provider>
      <button></button>
    </div>

  );
};

export default CartProvider;
