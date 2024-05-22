import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Layout/Header';
import Cart from './components/Cart/Cart';
import Products from './components/Product/Products' ;
 //axios installe voior ocmment gerer les o¡route mais avant resoudre probleme requetes postman 
 //erreur avec le login implique autre requete KO
 
function App() {
 
  //gestion affichage panier
  const [cartIsShown,setShow]=useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [cart, setCart] = useState([]);
  const addToCart = (product) => setCart([...cart, product]);

  return (
    <>
    <Header cartItemsNbr={cart} onShowCart={handleShow}/>
    <Products addToCart={addToCart} />
    {/*affichage condittionel grace au props*/}
    <Cart  cart={cart} cartIsShown={cartIsShown} onHideCart={handleClose}/>
    
    </>
  );
}

export default App;
