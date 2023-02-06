import React, { useState } from 'react'
import './App.css';
import Home from './Components/Home';

function App() {

  const [stock, setStock] = useState(3);

  return (
    <>
      <Home stock={stock} setStock={setStock}></Home>
    </>
  );
}

export default App;
