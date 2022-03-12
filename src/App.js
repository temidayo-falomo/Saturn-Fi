import React from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Form from './components/form/Form';
import TopPart from './components/top-part/TopPart';

function App() {
  return (
    <div className="App">
      <TopPart />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
