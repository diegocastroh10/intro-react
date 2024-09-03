import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { pizzaCart } from '../js/pizzas'; // Asegúrate de que la ruta sea correcta
import '../css/Cart.css';

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const increaseQuantity = (id) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQuantity = (id) => {
    setCart(cart.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 0 }
        : item
    ).filter(item => item.quantity > 0));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-container">
      {cart.map(item => (
        <Card key={item.id} className="cart-item">
          <div className="d-flex">
            <Card.Img variant="top" src={item.img} className="cart-img" />
            <div className="d-flex flex-column justify-content-between w-100 p-3">
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.desc}</Card.Text>
              <Card.Text>Precio: {item.price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}</Card.Text>
              <div className="d-flex align-items-center">
                <Button variant="outline-primary" onClick={() => decreaseQuantity(item.id)}>-</Button>
                <span className="mx-2">{item.quantity}</span>
                <Button variant="outline-primary" onClick={() => increaseQuantity(item.id)}>+</Button>
              </div>
            </div>
          </div>
        </Card>
      ))}
      <div className="total-section">
        <h4>Total: {calculateTotal().toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}</h4>
        <Button variant="success" className="mt-3">Pagar</Button>
      </div>
    </div>
  );
};

export default Cart;
