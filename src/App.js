import './App.css';
import Header from './components/Header';
import { Outlet } from "react-router-dom";
import React, { useEffect} from 'react';
import { useDispatch } from 'react-redux'

import * as actions from './state/action';
import { rentList } from './mock/rentList'


function App() {
  useEffect(() => {
    setRentList();
  }, []);
  const dispatch = useDispatch();
  const setRentList = () => {
    dispatch(actions.onSetRentList(rentList))
  }
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
