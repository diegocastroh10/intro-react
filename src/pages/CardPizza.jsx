/* eslint-disable react/prop-types */
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import '../css/CardPizza.css';
import { CartContext } from '../context/CartContext'; // Importamos el contexto del carrito

const CardPizza = (props) => {
  const { addToCart } = useContext(CartContext); // Consumimos la función addToCart desde el contexto

  // Función para añadir la pizza al carrito
  const handleAddToCart = () => {
    const pizza = {
      name: props.name,
      price: props.price,
      img: props.img,
      desc: props.desc,
    };
    addToCart(pizza); // Añadir pizza al carrito
  };

  return (
    <div id='cardpizza' className="d-flex flex-wrap p-3 align-items-center justify-content-center">
      <Card className='m-4 card-item text-center' style={{ width: '16rem' }}>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
        </Card.Body>
        <Card.Footer>
          <Card.Text className='text-muted m-0'>
            {props.price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}
          </Card.Text>
          <div className='d-flex flex-row justify-content-between'>
            {/* Agregamos Link para redirigir a la página de Pizza con el id */}
            <Link to={`/pizza/${props.id}`}>
              <Button variant="primary">Ver más</Button>
            </Link>
            <Button variant="primary" onClick={handleAddToCart}>Añadir</Button>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default CardPizza;
