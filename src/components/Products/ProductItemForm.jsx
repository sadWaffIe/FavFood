import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ProductItemForm(props){
    const handleAddToCart = () => props.addToCart(props.productData);
    return(
        <>
        {props.productData.price} €
        <Form.Control
          type="number" min={1}
          placeholder={props.productData.quantity}
        /> {/*max={ recupere le stock maximum du database }*/}
        <Button onClick={handleAddToCart}>Add</Button>
        </>
    );
};
export default ProductItemForm;