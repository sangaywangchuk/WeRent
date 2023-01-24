import './App.css';
import Header from './components/Header';
import { Outlet } from "react-router-dom";
import React from 'react';


function App() {

  return (
    <div className="App">
      <div className="">
        <div className="card-header">
          <Header></Header>
        </div>
        <div className="card-body">
          <Outlet/>
        </div>
        <div className="card-footer text-muted">
          Footer
        </div>
      </div>
    </div>
  );
}

export default App;
