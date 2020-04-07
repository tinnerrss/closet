import React, {useEffect, useState} from 'react';
import './App.css';
import Nav from './content/components/Nav';
import Homepage from './content/pages/Homepage';

function App() {

  return (
    <div className="App">
      
      <Nav />
      <Homepage />
    </div>
  );
}

export default App;
