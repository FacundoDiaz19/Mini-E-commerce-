import React from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="app bg-home">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
