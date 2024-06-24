// src/App.js
import React from 'react';
import './App.css';
import FetchData from './FetchData';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Fetch Example</h1>
      </header>
      <main>
        <FetchData />
      </main>
    </div>
  );
}

export default App;
