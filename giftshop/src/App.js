import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from
'react-router-dom';
import './App.css';
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import Products from './components/pages/Products'
import SignUp from './components/pages/SignUp'
import Admin_Products from './components/pages/Admin/Admin_Products';
import Admin_Users from './components/pages/Admin/Admin_Users';
import Administracion from './components/pages/Admin/Administracion';
import Carrito from './components/pages/Carrito';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={ Home } />
        <Route path='/services' component={ Services } />
        <Route path='/products' component={ Products } />
        <Route path='/sign-up' component={ SignUp } />
        <Route path='/administracion' component={ Administracion } />
        <Route path='/admin_products' component={ Admin_Products } />
        <Route path='/admin_users' component={ Admin_Users } />
        <Route path='/carrito' component={ Carrito } />
      </Switch>
    </Router>
    </>
  );
}

export default App;
