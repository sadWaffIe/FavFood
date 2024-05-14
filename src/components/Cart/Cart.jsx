import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

function Cart(props){
    return(
        <>
        <Modal
        //cartIsShown true ou false pour faire le rendu des produit en props
        show={props.cartIsShown} //parametre des props voir App.js ou se trouve l'implementation de Cart
        onHide={props.onHideCart}
        backdrop="static"
        keyboard={false}
        >
            <Modal.Header closeButton>
            <Modal.Title>Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Ref</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                {props.cart.map((product) => (
                    <tr>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.quantity}</td>
                    </tr>
                ))}
                </tbody>
               
            </Table>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={props.onHideCart}>
                Close
            </Button>
            <Button variant="primary">Order</Button>
            </Modal.Footer>
        </Modal>
        </>
    );
    }
export default Cart;