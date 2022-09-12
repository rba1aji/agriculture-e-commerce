import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import axios from 'axios';

function App() {

  useEffect(() => {
    axios.get("https://localhost:7252/api/BusDetails/string2string")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      })

  }, []);
  return (
    <div className="App">
      <header className="App-header">
        AgriECom
        {/* <img src={logo} className="App-logo" alt="logo" />
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
        </a> */} 
      </header>
    </div>
  );
}

export default App;
