import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import HeaderCartButton from './HeaderCartButton.jsx';




function Header(props) {
  
  return (
    <>
      <Navbar bg="light" variant="light">
          <Navbar.Brand href="#">FavFood</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Features</Nav.Link>
            <Nav.Link href="#">Pricing</Nav.Link>
          </Nav>
          <Nav className="ms-auto"><HeaderCartButton cartItemsNbr={props.cartItemsNbr} onClick={props.onShowCart}></HeaderCartButton>
          </Nav>
          <></>
      </Navbar>
    </>
  );
}


export default Header;
