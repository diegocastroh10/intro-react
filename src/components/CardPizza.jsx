/* eslint-disable react/prop-types */
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons';
import './CardPizza.css';

const CardPizza = (props) => {
  // Formatear el precio con separador de miles
  const formattedPrice = props.price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });

  // Estado para controlar si se muestra la descripción completa o truncada
  const [showFullDesc, setShowFullDesc] = useState(false);

  // Función para truncar la descripción a los primeros 20 caracteres
  const truncatedDesc = props.desc.length > 20 ? props.desc.substring(0, 20) + '...' : props.desc;

  return (
    <div id='cardpizza' className="d-flex flex-wrap p-3 align-items-center justify-content-center">
      <Card className='m-4 card-item text-center' style={{ width: '16rem' }}>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
        </Card.Body>
        <Card.Footer>
          <Card.Text className='text-muted m-0'>
            Descripción:
          </Card.Text>
          {/* Mostrar la descripción truncada o completa según el estado */}
          <Card.Text>
            {showFullDesc ? props.desc : truncatedDesc}
            <span 
              className="text-primary" 
              style={{ cursor: 'pointer' }} 
              onClick={() => setShowFullDesc(!showFullDesc)}
            >
              {showFullDesc ? ' Ver menos' : ' Ver más'}
            </span>
          </Card.Text>

          <Card.Text className='text-muted m-0'>
            Ingredientes:
          </Card.Text>
          {/* Mostrar los ingredientes como una lista desordenada */}
          <Card.Text>
            <ul className="list-unstyled ingredients-list">
              {props.ingredients.map((ingredient, index) => (
                <li key={index} className="ingredient-item">
                  <FontAwesomeIcon className='pe-2' icon={faPizzaSlice} /> {ingredient}
                </li>
              ))}
            </ul>
          </Card.Text>
        </Card.Footer>
        <Card.Footer className="text-muted">
          <Card.Text>
            {formattedPrice}
          </Card.Text>
          <div className='d-flex flex-row justify-content-between'>
            <Button variant="primary">Ver más</Button>
            <Button variant="primary">Añadir</Button>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default CardPizza;
