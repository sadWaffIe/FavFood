import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

function HeaderCartButton(props){
    return(
        <>
                <Button variant="primary" onClick={props.onClick}>
                    Your Cart <Badge bg="secondary">{props.cartItemsNbr.length}</Badge> {/* modifier le 1 avec le nombre de produits par la suite*/}
                </Button>            
        </>
    );
}
export default HeaderCartButton;