import React from 'react';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Landing from './layouts/Landing';
import './scss/app.scss';



const App = () => {
  return (
    <>
      <Header />
      <Landing />
      <Footer />
    </>
  );
}

export default App;
