
import React from 'react';
import Header from './Componets/Header/Header'
import Hero from './Componets/Hero/Hero';
import About from './Componets/About/About';
import Contacts from './Componets/Contacts/Contacts';
import Products from './Componets/Products/Products';


function App() {
  return (
    <div className="App">
      <Header />
      <Hero/>
      <About/>
      <Products/>
      <Contacts/>
     
      
    </div>
  );
}

export default App;
