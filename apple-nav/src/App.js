import React, {useState, useEffect, } from 'react';
import AppNav from './components/AppNav';
import navList from './nav-data';

import './App.css';

function App() {
  const [navLinks, setNavLinks] = useState([]);

  useEffect(() => setNavLinks(navList), []);

  return (
   <AppNav navLinks={navLinks} />
    /* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */
  );
}

export default App;
