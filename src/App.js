import React from 'react';
import { Routes, Route } from "react-router-dom";
import Login from './Pages/Login/Login.js';
import StoreName from './Pages/Store/Store';
import StoreSecond from './Pages/Store/StoreSecond';
import Signup from './Pages/Signup/Signup';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/storename" element={<StoreName />} />
          <Route path="/storesecond" element={<StoreSecond />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
