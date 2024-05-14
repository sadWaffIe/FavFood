import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Layout/Header';
import Cart from './components/Cart/Cart';
import Products from './components/Products/Products' ;
 //axios installe voior ocmment gerer les o¡route mais avant resoudre probleme requetes postman 
 //erreur avec le login implique autre requete KO
 
function App() {
 
  //gestion affichage panier
  const [cartIsShown,setShow]=useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  //spinner au chargement des elements
  const myLoader= () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  
  const fetchData = () => {
    // Mostra lo spinner
    setLoading(true);
  
  // Fai la richiesta Axios
  axios.get('url_della_tua_richiesta')
    .then(function (response) {
      // Nascondi lo spinner quando la richiesta è completata
      setLoading(false);
      // Imposta i dati ricevuti dalla risposta
      setData(response.data);
    })
    .catch(function (error) {
      // Nascondi lo spinner in caso di errore
      setLoading(false);
      // Gestisci l'errore
      console.log(error);
    });
  };




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
