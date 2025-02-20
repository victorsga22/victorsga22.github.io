import Numbers from './modules/numbers/numbers.js';
import Stars from './modules/stars/stars.js';

import './App.css';
import React from "react";

function App() {
  return (
    <div>
      <header className="App-header">
        <Numbers />
        <Stars />
      </header>
    </div>
  );
}

export default App;
