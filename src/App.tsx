import React from 'react';
import logo from './logo.svg';
import './App.css';
import Column from './Components/Column/column'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import MainPage from './Pages/MainPage';

const titles =['TODO', 'In Progress', 'Testing', 'Done'];

function App() {
  return (
    <div className="App">
     <MainPage/>
    </div>
  );
}
export default App;
