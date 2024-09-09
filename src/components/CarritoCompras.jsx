import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CarritoCompras = () => {
  const { cartItems, totalPrice } = useContext(CartContext); // Accedemos a los productos en el carrito y al total

  return (
    <div className="p-3">
      <h5>Carrito de Compras</h5>
      <ul className="list-unstyled">
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <li key={index} className="mb-2">
              <img src={item.img} alt={item.name} style={{ width: '50px', marginRight: '5px' }} />
              {item.name} - {item.price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}
            </li>
          ))
        ) : (
          <p>No hay productos en el carrito.</p>
        )}
      </ul>
      <hr />
      <h6>Total: {totalPrice.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}</h6>
    </div>
  );
};

export default CarritoCompras;
