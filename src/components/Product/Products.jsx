import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProductItem from './ProductItem';
var tabProduits=[
  {
      id:'1aca5fbola823',
      name:'Test_produit_static1',
      price:43.99,
      quantity:20,
      image:'https://dummyimage.com/200x200',
      description:'essai de affichage au survol avec du css'
  },
  {
      id:'1aca5fbola823',
      name:'Test_produit_static2',
      price:22.99,
      quantity:10,
      image:'https://dummyimage.com/200x200',
      description:'essai de affichage au survol avec du css'
  }
];


function Products(props) {
  return (
    <>
      <Row xs={1} md={4} className="g-4">
      {Array.from({ length:4}).map((_, idx) => (
        <Col key={idx}>
          {tabProduits.map(function(product){
            return <ProductItem addToCart={props.addToCart} productData={product}/>;})}    
        </Col>
      ))}
    </Row>
    </>
   
  );
};


export default Products;
