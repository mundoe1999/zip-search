import React from 'react';
import logo from './logo.svg';

import './App.css';

import AppRouter from './components/navbar.jsx';
import './components/navbar.css';

import Card from './components/CityCard.jsx';
import './components/CityCard.css';

import ZipCodeFetch from './components/zipcode';

function App() {
  return (
      <div>
        <AppRouter/>
    <div className="card-container">
    </div>
      </div>
  );
}

export default App;
