import React from 'react';
import './App.css';
import {Name, Course, City} from './components/Questao2';

function App() {
  return (
    <div className="App">
        <h2>
          <Name />
          <Course/> 
          <City /> </h2>
    </div>
  );
}

export default App;
