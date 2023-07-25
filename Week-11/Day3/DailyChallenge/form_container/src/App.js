import logo from './logo.svg';
import './App.css';
import React from 'react';
import FormContainer from './FormContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <div>
        <h1>React Form Container</h1>
        <FormContainer />
       </div>
      </header>
    </div>
  );
}

export default App;
