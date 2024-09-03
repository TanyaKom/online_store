import React from 'react';
import './App.css';
import StoreComponent from "./components/StoreComponent"
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <div className="app">
      <BrowserRouter> 
        <StoreComponent />
      </BrowserRouter>
       
    </div>
  );
}

export default App;
