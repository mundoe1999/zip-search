import React from 'react';
import logo from './logo.svg';

import './App.css';

import AppRouter from './components/navbar.jsx';
import './components/navbar.css';

import Card from './components/CityCard.jsx';
import './components/CityCard.css';

function App() {
  return (
      <div>
        <AppRouter/>
    <div className="card-container">
      <Card LocationText="New York" Long="100" Lat="000" />
    </div>
      </div>
  );
}

export default App;
