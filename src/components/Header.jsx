import Carousel from 'react-bootstrap/Carousel';
import image from '../assets/bannerpizza1.jpg';
import Container from 'react-bootstrap/Container';
import './Header.css';

const Header = () => {
  return (
    <Container fluid className="d-flex flex-column align-items-center justify-content-center">
      <Carousel className='p-3 w-100' data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="carousel-image"
            src={image}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5></h5>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src={image}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5></h5>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src={image}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5></h5>
            <p>
              
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Header;
