import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar} from './components/Navbar'
import  {ProductsList} from './components/ProductsList'
import {ProductDetails} from './components/ProductDetails'
import {Error} from './components/Error'
import {Cart} from './components/cart/Cart'
import { Modal } from './components/Modal';


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path='/'>
          <ProductsList/>
        </Route>
        <Route path='/details'>
          <ProductDetails/>
        </Route>
        
        <Route path='/cart'>
          <Cart/>
        </Route>
        <Route path='/*'>
          <Error/>
        </Route> 
      </Switch>  
      <Modal/>
    </Router>

    </>
  );
}

export default App;
