// import logo from './logo.svg';
import { Component } from 'react';
import './App.css';
import Main from './component/main';
import NavPage from './navPage'
import { Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <div>
        {/* <Main /> */}
        <NavPage/>
      </div>
      
    </div>
  );
}

export default App;
