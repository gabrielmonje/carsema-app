import React from 'react';
import './App.css'; // Pode manter para estilos globais muito básicos se necessário
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Partners from './components/Partners/Partners';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        {/*<Partners />*/}
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;