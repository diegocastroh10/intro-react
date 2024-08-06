import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons';
import './CardPizza.css';

const CardPizza = (props) => {
  // Formatear el precio con separador de miles
  const formattedPrice = props.price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });

  return (
    <div id='cardpizza' className="d-flex flex-wrap p-3 align-items-center justify-content-center">
      <Card className='m-4 card-item text-center' style={{ width: '16rem' }}>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
        </Card.Body>
        <Card.Footer>
          <Card.Text className='text-muted m-0'>
            Ingredientes:
          </Card.Text>
          <Card.Text>
            <FontAwesomeIcon className='pe-2' icon={faPizzaSlice} />{props.ingredients}
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
