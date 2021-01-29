import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <main className="py-3">
          <Container>
            <Route path="/" render={() => <HomeScreen />} exact />
            <Route path="/product/:id" render={() => <ProductScreen />} />
          </Container>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
