import React, {useEffect, useState} from 'react';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Nav from './content/components/Nav';
import Content from './content/Content';

function App() {

  return (
    <Router>
      <div className="app">
        <Nav />
        <Content />
      </div>
    </Router>
  );
}

export default App;
