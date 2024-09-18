import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Importamos useParams para obtener el id
import { Card } from 'react-bootstrap';

import '../css/Pizza.css';

const Pizza = () => {
    const { id } = useParams(); // id de la pizza desde la URL
    const [pizza, setPizza] = useState(null); // Guardar los detalles de la pizza

    useEffect(() => {
        // Petición a la API usando el id
        fetch(`http://localhost:5000/api/pizzas/${id}`)
            .then(res => res.json())
            .then(res => setPizza(res)); // Guardamos la pizza obtenida en el estado
    }, [id]);

    // Muestra un loading si aún no se ha obtenido la pizza
    if (!pizza) {
        return <p>Validando información...</p>;
    }

    return (
        <div className="cart-container">
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
        </div>
    );
};

export default Pizza;
