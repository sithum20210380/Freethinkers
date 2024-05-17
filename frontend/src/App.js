import './App.css';
import React from 'react';
import AppRoutes from './App/routes';
import Navbar from './App/components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <AppRoutes></AppRoutes>
    </div>
  );
}

export default App;
