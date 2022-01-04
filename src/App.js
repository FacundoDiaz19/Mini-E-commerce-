import React from 'react';
import './App.css';
import Alertproduct from './components/AlertProduct';
import Home from './components/Home';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="app bg-home">
      <Navbar />
      <Alertproduct />
      <Home />
    </div>
  );
}

export default App;
