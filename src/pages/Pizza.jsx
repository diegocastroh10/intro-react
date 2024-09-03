import { useState, useEffect } from "react";
import { Card } from 'react-bootstrap';

import '../css/Pizza.css';

const Pizza = () => {
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/pizzas")
            .then(res => res.json())
            .then(res => setPizzas(res));
    }, []);

    return (
        <div className="cart-container">
            {pizzas.map(pizza => (
                <Card key={pizza.id} className="cart-item">
                <div className="d-flex">
                    <Card.Img variant="top" src={pizza.img} className="cart-img" />
                <div className="d-flex flex-column justify-content-between w-100 p-3">
                <Card.Title>{pizza.name}</Card.Title>
                <Card.Text>{pizza.desc}</Card.Text>
                <Card.Text className="ingredientes">{pizza.ingredients}</Card.Text>
                <Card.Text>Precio: {pizza.price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}</Card.Text>
                </div>
                </div>
                </Card>
            ))}
        </div>
      
    );
};

export default Pizza;
