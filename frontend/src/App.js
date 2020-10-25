import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Landing from './screens/Landing';
import './scss/app.scss';
import ProductScreen from './screens/ProductScreen';



const App = () => {
  return (
    <Router>
      <Header />
      <Route exact path='/' component={Landing} />
      <Route exact path='/product/:name/:id' component={ProductScreen} />
      <Footer />
    </Router>
  );
}

export default App;
