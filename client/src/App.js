// import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from './reducers/routes';
import Header from './components/Header';
// import 'bootstrap/dist/css/bootstrap.min.css';

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
      <BrowserRouter>
        <header>
          <Header/>
        </header>
        <Routes>
          {routes.map((item, index) => {
            return (<Route
              key={index}
              path={item.path}
              element={item.element}
              exact
            >
            </Route>);
          })
          }
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
