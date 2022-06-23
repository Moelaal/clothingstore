import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';
import AboutPage from './pages/AboutPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import PrivateRoute from './pages/PrivateRoute';
import ProductsPage from './pages/ProductsPage';
import SingleProductPage from './pages/SingleProductPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/cart" exact>
          <CartPage />
        </Route>
        <Route path="/products" exact>
          <ProductsPage />
        </Route>
        <Route path="/products/:id" children={<SingleProductPage />} />
        <PrivateRoute path="/checkout">
          <CheckoutPage />
        </PrivateRoute>
        <Route path="/about" exact>
          <AboutPage />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
