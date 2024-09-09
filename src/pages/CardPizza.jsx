/* eslint-disable react/prop-types */
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons';
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
            <Button variant="primary">Ver más</Button>
            <Button variant="primary" onClick={handleAddToCart}>Añadir</Button>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default CardPizza;

