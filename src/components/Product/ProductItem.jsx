import Card from 'react-bootstrap/Card';
import ProductItemForm from './ProductItemForm';


function ProductItem(props){
    return(
        <>
        <Card>
        <Card.Img variant="top" src={props.productData.image} />
        <Card.Body>
          <Card.Title>{props.productData.name}</Card.Title>
          <Card.Text>
            {props.productData.description}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <ProductItemForm  addToCart={props.addToCart} productData={props.productData}/>
        </Card.Footer>
      </Card>
        </>
    );

};

export default ProductItem;