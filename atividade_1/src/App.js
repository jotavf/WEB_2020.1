import React from 'react';
import './App.css';
import Questao3 from './components/Questao3'
import Questao3_1 from './components/Questao3_1'

function App() {
  return (
    <div className="App">
        <Questao3>
          <Questao3_1 name="João Victor Falcão"/>
          <Questao3_1 course="Eng. de Software"/>
          <Questao3_1 city="Quixeramobim"/>
        </Questao3>
    </div>
  );
}

export default App;
