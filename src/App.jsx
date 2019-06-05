import React from 'react';
import logo from './logo.svg';

import './App.css';
import ZipCodeFetch from './components/zipcode';

function App() {
  return (
    <div>
      <ZipCodeFetch zipAddress={10011}/>
    </div>
  );
}

export default App;
