import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './styles/App.css';
import Login from './Pages/Login/Login.js';
import StoreName from './Pages/Store/Store';
import StoreSecond from './Pages/Store/StoreSecond';

function App() {
  return (
    <div className="App">
    <div className="wrapper">
        <BrowserRouter>
          <Switch>
          <Route path="/login">
              <Login />
              
            </Route>
            <Route path="/storename" >
              <StoreName />
              
            </Route>
            
            <Route path="/storesecond" >
              <StoreSecond />
            </Route>
           
          </Switch>
        </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
