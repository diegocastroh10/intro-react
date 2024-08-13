import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser, faIdBadge, faRightFromBracket, faUsers, faFile, faCartShopping, faPizzaSlice } from '@fortawesome/free-solid-svg-icons';

const Nav_bar = () => {
  let total = "25.000";
  const token = false; // Cambia esto a true para probar el otro caso

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/#"><FontAwesomeIcon className='pe-3' icon={faPizzaSlice} />Pizzería Linares</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/#">
              <Button variant="outline-primary">
                <FontAwesomeIcon className='pe-2' icon={faHouseUser} />Home
              </Button>
            </Nav.Link>
            {token ? (
              <>
                <Nav.Link href="#profile">
                  <Button variant="outline-primary">
                    <FontAwesomeIcon className='pe-2' icon={faIdBadge} />Profile
                  </Button>
                </Nav.Link>
                <Nav.Link href="#logout">
                  <Button variant="outline-primary">
                    <FontAwesomeIcon className='pe-2' icon={faRightFromBracket} />Logout
                  </Button>
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link href="/login">
                  <Button variant="outline-primary">
                    <FontAwesomeIcon className='pe-2' icon={faUsers} />Login
                  </Button>
                </Nav.Link>
                <Nav.Link href="/sesionUser">
                  <Button variant="outline-primary">
                    <FontAwesomeIcon className='pe-2' icon={faFile} />Register
                  </Button>
                </Nav.Link>
              </>
            )}
          </Nav>

          <Button variant="outline-success">
            <FontAwesomeIcon className='pe-2' icon={faCartShopping} />Total: ${total}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav_bar;
