import React from 'react';

// function Id() {
//     return(
//       <div>
//           <h1>João Victor Falcão</h1>
//           <h1>Eng. de Software</h1>
//           <h1>Quixeramobim</h1>
//       </div>
//     );
// }

// funções \/
function Name(){
    return(
        <h3>Nome: João Victor Falcão</h3>
    );
}

function Course(){
    return(
        <h3>Curso: Eng. de Software</h3>
    );
}

function City(){
    return(
        <h3>Cidade natal: Quixeramobim</h3>
    );
}

function AllFunc() {
    return(
        <div>
            <header>Questão 1</header>
            <Name />
            <Course />
            <City />
        </div>
    );
}


export default AllFunc;