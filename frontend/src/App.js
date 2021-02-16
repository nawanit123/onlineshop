import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <main className="py-3">
          <Container>
            <Route
              path="/login"
              render={(routeProps) => <LoginScreen {...routeProps} />}
            />
            <Route
              path="/register"
              render={(routeProps) => <RegisterScreen {...routeProps} />}
            />
            <Route
              path="/product/:id"
              render={(routeProps) => <ProductScreen {...routeProps} />}
            />
            <Route
              path="/cart/:id?"
              render={(routeProps) => <CartScreen {...routeProps} />}
            />
            <Route path="/" render={() => <HomeScreen />} exact />
          </Container>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
